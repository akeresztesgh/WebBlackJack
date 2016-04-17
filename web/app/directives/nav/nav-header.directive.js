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
            },
            templateUrl: 'app/directives/nav-header/nav-header.html'
        };
        return directive;

        function NavController(){
            var vm = this;
        }
        
    }
})();
