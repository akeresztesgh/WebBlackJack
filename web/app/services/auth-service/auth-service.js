(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('authService', authService);

    function authService($http, $q, $log, localStorageService, apiUrl, jwtHelper) {

        var authentication = {
            isAuth: false,
            userName : ''
        };

        return {
            login : login,
            logOut : logOut,
            authentication : authentication
        };

        function login(loginData) {

            var data = 'grant_type=password&username=' + loginData.userName +
                       '&password=' + loginData.password;
            var deferred = $q.defer();

            $http.post(apiUrl + '/token', data, {
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .then(function(response){
                localStorageService.set('authorizationData', {token: response.access_token, userName: loginData.userName});
                authentication.isAuth = true;
                authentication.userName = loginData.userName;

                var tokenPayload = jwtHelper.decodeToken(response.access_token);
                localStorageService.set('userName', tokenPayload.unique_name);
                localStorageService.set('role', tokenPayload.role);
                $log.debug(tokenPayload);

                return deferred.resolve(response);
            }, function(){
                logOut();
                return deferred.reject(err);
            });
            return deferred.promise;
        }

        function logOut() {
            localStorageService.clearAll();
            authentication.isAuth = false;
            authentication.userName = '';
        }
    }
})();
