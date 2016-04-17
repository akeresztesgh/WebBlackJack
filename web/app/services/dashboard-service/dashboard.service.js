(function(){
    angular.module('app.services')
        .service('dashboardService', DashBoardService);

        function DashBoardService(){
            return {
                testValues: testValues
            };

            function testValues($http, baseUrl) {
                return $http.get(baseUrl + 'values');
            }
        }
}))();
