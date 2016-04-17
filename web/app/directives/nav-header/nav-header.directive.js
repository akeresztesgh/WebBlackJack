(function(){
    angular.module('app.directives', [])
    .directive('navHeader', NavDirective)

    function NavDirective(){
        var directive = {
            bindToController: true,
            controller: NavController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                'navline': '=',
                'noStorePicker': '='
            },
            templateUrl: 'app/directives/nav-header/nav-header.html'
        };
        return directive;

        function NavController($state, authService){
            var vm = this;
            vm.userName = authService.userName();

            vm.logout = function(){
                $state.go('login.login');
            };
        }
    }
})();
