app.config(
  ['$stateProvider', '$urlRouterProvider', 'RestangularProvider', 'APP_CONSTANTS', 
    function ($stateProvider, $urlRouterProvider, RestangularProvider, APP_CONSTANTS) {

      RestangularProvider.setBaseUrl(APP_CONSTANTS.BASE_URL);
      $stateProvider
        .state({
          name: APP_CONSTANTS.NAME.SIGNUP,
          url: APP_CONSTANTS.URLS.SIGNUP,
          templateUrl: APP_CONSTANTS.TEMPLATE_URL.SIGNUP,
          controller: APP_CONSTANTS.CONTROLLERS.SIGNUP,
        })
        .state({
          name: APP_CONSTANTS.NAME.LOGIN,
          url: APP_CONSTANTS.URLS.LOGIN,
          templateUrl: APP_CONSTANTS.TEMPLATE_URL.LOGIN,
          controller: APP_CONSTANTS.CONTROLLERS.LOGIN,
        })
        .state({
          name: APP_CONSTANTS.NAME.PROFILE,
          url: APP_CONSTANTS.URLS.PROFILE,
          templateUrl: APP_CONSTANTS.TEMPLATE_URL.PROFILE,
          controller: APP_CONSTANTS.CONTROLLERS.PROFILE,
          resolve: {
            data: function($q, profileService) {
              return profileService.getUserDetails()
            }
          },
        })
        .state({
          name: APP_CONSTANTS.NAME.VERIFY,
          url: APP_CONSTANTS.URLS.VERIFY,
          templateUrl: APP_CONSTANTS.TEMPLATE_URL.VERIFY,
          controller: APP_CONSTANTS.CONTROLLERS.VERIFY,
        })
        .state({
          name: APP_CONSTANTS.NAME.EDIT_PASSWORD,
          url: APP_CONSTANTS.URLS.EDIT_PASSWORD,
          templateUrl: APP_CONSTANTS.TEMPLATE_URL.EDIT_PASSWORD,
          controller: APP_CONSTANTS.CONTROLLERS.EDIT_PASSWORD,
        });
      $urlRouterProvider.otherwise("/");
    }]);
