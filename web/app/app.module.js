(function(){
    'use strict';

    var app = angular.module('app', [
        'angular-jwt',
        'app.partial',
        'app.services',
        'app.directives'
    ]);

    app.config(function($locationProvider, $urlRouterProvider, localStorageServiceProvider){
        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise('/');
        localStorageServiceProvider
            .setPrefix('WebBlackJack')
            .setStorageType('sessionStorage');
    });

    app.config(function($httpProvider, jwtInterceptorProvider) {
        jwtInterceptorProvider.tokenGetter = ['localStorageService', function(localStorageService) {
            return localStorageService.get('authorizationData').token;
        }];
        $httpProvider.interceptors.push('jwtInterceptor');
    });

})();
