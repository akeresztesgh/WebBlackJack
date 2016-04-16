(function(){
    'use strict';

     angular.module('app.partial')
        .controller('HomeCtrl', HomeCtrl);

        function HomeCtrl() {
            var vm = this;
            vm.msg = 'this is a message';
        }
})();
