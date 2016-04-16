(function(){
    angular.module('app.partial')
    .controller('LoginCtrl', HomeCtrl);

    function HomeCtrl(authService){
        var vm = this;

        vm.user = {};
        vm.login = function(){
            authService.login({})
                .then(function(){

                }, function(){

                });
        };
    }
})();
