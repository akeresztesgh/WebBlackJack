(function(){
    'use strict';

    angular.module('app.partial')
        .config(function($stateProvider){
            $stateProvider
                .state('home', {
                    url: '',
                    abstract: true,
                    templateUrl: 'app/partial/app.html'
                })
                .state('home.home', {
                    url: '',
                    templateUrl: 'app/partial/home/home.html',
                    controller: 'HomeCtrl',
                    controllerAs: 'vm'
                });

                // .state('home', {
                //     url: '',
                //     templateUrl: 'app/partial/home/home.html',
                //     controller: 'HomeCtrl',
                //     controllerAs: 'vm'
                // });
        });
})();
