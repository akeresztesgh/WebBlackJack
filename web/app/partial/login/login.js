(function(){
    angular.module('app.partial')
    .controller('LoginCtrl', HomeCtrl);

    function HomeCtrl($state, authService){
        var vm = this;

        authService.logOut();

        vm.user = {};
        vm.login = function(){
            authService.login(vm.user)
                .then(function(){
                    $state.go('dashboard.dashboard');
                }, function(){
                    alert('error!');
                });
        };
    }
})();
