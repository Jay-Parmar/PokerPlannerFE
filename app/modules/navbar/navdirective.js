app.directive('navigationBar', [
    '$rootScope', '$cookies', 
    function($rootScope, $cookies){
        return{
            restrict: 'A',
            templateUrl: 'modules/navbar/navbar.html',
        }
    }
]);
