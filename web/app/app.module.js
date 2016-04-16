(function(){
    'use strict';

    var app = angular.module('app', ['app.partial', 'app.directives']);

    app.config(function($locationProvider){
        $locationProvider.html5Mode(false);
    });

})();
