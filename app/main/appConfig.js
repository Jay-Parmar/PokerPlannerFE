app.config(
  ['$stateProvider', '$urlRouterProvider', 'RestangularProvider', 'APP_CONSTANTS',
    function ($stateProvider, $urlRouterProvider, RestangularProvider, APP_CONSTANTS) {

      RestangularProvider.setBaseUrl(APP_CONSTANTS.BASE_URL);
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
