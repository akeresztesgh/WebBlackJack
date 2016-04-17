(function(){
    angular.module('app.partial')
    .controller('LoginCtrl', HomeCtrl);

    function HomeCtrl($state, authService){
        var vm = this;

        vm.user = {};
        vm.login = function(){
            authService.login(vm.user)
                .then(function(){
                    alert('logged in !');
                }, function(){
                    alert('error!');
                });
        };
    }
})();
