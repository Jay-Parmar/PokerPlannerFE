app.config(
  ['$stateProvider', '$urlRouterProvider', 'RestangularProvider',
    function ($stateProvider, $urlRouterProvider, RestangularProvider) {

      RestangularProvider.setBaseUrl("http://127.0.0.1:8000/");
      $stateProvider
        .state({
          name: "signup",
          url: "/",
          templateUrl: "modules/signup/signup.html",
          controller: "SignupController",
        })
        .state({
          name: "login",
          url: "/login",
          templateUrl: "modules/login/login.html",
          controller: "LoginController",
        });
      $urlRouterProvider.otherwise("/");
    }]);
