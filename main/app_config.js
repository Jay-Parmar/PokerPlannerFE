
app.config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider',function($stateProvider,$urlRouterProvider, RestangularProvider) {
    
    RestangularProvider.setBaseUrl("http://127.0.0.1:8000/");
    $stateProvider
            .state({
                name:"signup",
                url:"/",
                templateUrl : "modules/signup/signup.html",
                controller : "SignupController",
                // resolve: { authenticate: notAuthenticate }
            })
            .state({
                name:"login",
                url:"/login",
                templateUrl: "modules/login/login.html",
                controller: "LoginController",
                // resolve: { authenticate: notAuthenticate }
            // }) 
            // .state({
            //     name:"profile",
            //     url:"/profile",
            //     templateUrl: "profilePage/profile.html",
            //     controller: "profilePageController",
            //     resolve: { authenticate: authenticate }
            // })
            // .state({
            //     name:"editProfile",
            //     url:"/editProfile",
            //     templateUrl:"profilePage/editProfile.html",
            //     controller:"editProfileController",
            //     resolve: { authenticate: authenticate }
            });
        $urlRouterProvider.otherwise("/");

        function authenticate($q, IsLoggedIn, $state, $timeout) {
            if (IsLoggedIn.isLoggedIn()) {

              return $q.when();

            } else {
              $timeout(function() {

                $state.go('login');
                
              })
              return $q.reject()
            }
          }

          function notAuthenticate($q, IsLoggedIn) {
            if (!IsLoggedIn.isLoggedIn()) {
                
              return $q.when();

            } else {

              return $q.reject();

            }
          }

}]);
