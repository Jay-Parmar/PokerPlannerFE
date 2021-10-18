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
          name: APP_CONSTANTS.NAME.POKER_CREATE,
          url: APP_CONSTANTS.URLS.POKER_CREATE,
          templateUrl: APP_CONSTANTS.TEMPLATE_URL.POKER_CREATE,
          controller: APP_CONSTANTS.CONTROLLERS.POKER_CREATE,
        })
        .state({
          name: APP_CONSTANTS.NAME.POKER_LIST,
          url: APP_CONSTANTS.URLS.POKER_LIST,
          templateUrl: APP_CONSTANTS.TEMPLATE_URL.POKER_LIST,
          controller: APP_CONSTANTS.CONTROLLERS.POKER_LIST,
        })
        .state({
          name: APP_CONSTANTS.NAME.POKER_DETAIL,
          url: APP_CONSTANTS.URLS.POKER_DETAIL,
          templateUrl: APP_CONSTANTS.TEMPLATE_URL.POKER_DETAIL,
          controller: APP_CONSTANTS.CONTROLLERS.POKER_DETAIL,
        })
        .state({
          name: APP_CONSTANTS.NAME.MEMBERS,
          url: APP_CONSTANTS.URLS.MEMBERS,
          templateUrl: APP_CONSTANTS.TEMPLATE_URL.MEMBERS,
          controller: APP_CONSTANTS.CONTROLLERS.MEMBERS,
        });
      $urlRouterProvider.otherwise("/");
    }]);
