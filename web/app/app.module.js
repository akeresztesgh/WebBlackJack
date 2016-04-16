(function() {
    'use strict';

    var app = angular.module('app', [
        'angular-jwt',
        'app.partial',
        'app.services',
        'app.directives'
    ]);

    app.config(function($locationProvider, $urlRouterProvider, localStorageServiceProvider) {
        $locationProvider.html5Mode(false);
        //$urlRouterProvider.otherwise('/login');
        localStorageServiceProvider
            .setPrefix('WebBlackJack')
            .setStorageType('sessionStorage');
    });

    app.config(function($httpProvider, jwtInterceptorProvider) {
        jwtInterceptorProvider.tokenGetter = ['localStorageService', function(localStorageService) {
            var auth = localStorageService.get('authorizationData');
            return auth ? auth.token : null;
        }];
        $httpProvider.interceptors.push('jwtInterceptor');
    });

    app.run(function($rootScope, $state, localStorageService, jwtHelper) {
        $rootScope.$on('$locationChangeStart', function() {
            var token = localStorageService.get('authorizationData');
            if(!token){
                $state.go('login.login');
                return;
            }

            if (!jwtHelper.isTokenExpired(token)) {
                $rootScope.$broadcast('login');
            } else {
                $state.go('login.login');
            }
        });
    });

})();
