app.config(
  ['$stateProvider', '$urlRouterProvider', 'RestangularProvider', 'APP_CONSTANTS',
    function ($stateProvider, $urlRouterProvider, RestangularProvider, APP_CONSTANTS, $stateParams) {

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
          name: APP_CONSTANTS.NAME.ACCOUNT_ACTIVATE,
          url: APP_CONSTANTS.URLS.ACCOUNT_ACTIVATE,
          templateUrl: APP_CONSTANTS.TEMPLATE_URL.ACCOUNT_ACTIVATE,
          controller: APP_CONSTANTS.CONTROLLERS.ACCOUNT_ACTIVATE,
        })
        .state({
          name: APP_CONSTANTS.NAME.GROUP,
          url: APP_CONSTANTS.URLS.GROUP,
          templateUrl: APP_CONSTANTS.TEMPLATE_URL.GROUP,
          controller: APP_CONSTANTS.CONTROLLERS.GROUP,
        })
        .state({
          name: APP_CONSTANTS.NAME.GROUP_DETAIL,
          url: APP_CONSTANTS.URLS.GROUP_DETAIL,
          templateUrl: APP_CONSTANTS.TEMPLATE_URL.GROUP_DETAIL,
          controller: APP_CONSTANTS.CONTROLLERS.GROUP_DETAIL,
        })
        .state({
          name: APP_CONSTANTS.NAME.BOARD,
          url: APP_CONSTANTS.URLS.BOARD,
          templateUrl: APP_CONSTANTS.TEMPLATE_URL.BOARD,
          controller: APP_CONSTANTS.CONTROLLERS.BOARD,
        })
        .state({
          name: APP_CONSTANTS.NAME.EDIT_PASSWORD,
          url: APP_CONSTANTS.URLS.EDIT_PASSWORD,
          templateUrl: APP_CONSTANTS.TEMPLATE_URL.EDIT_PASSWORD,
          controller: APP_CONSTANTS.CONTROLLERS.EDIT_PASSWORD,
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
          params: {
            'id':'',
            'mid':''
        } 
        })
        .state({
          name: APP_CONSTANTS.NAME.MEMBERS,
          url: APP_CONSTANTS.URLS.MEMBERS,
          templateUrl: APP_CONSTANTS.TEMPLATE_URL.MEMBERS,
          controller: APP_CONSTANTS.CONTROLLERS.MEMBERS,
        })
        .state({
          name: APP_CONSTANTS.NAME.JIRA_CREDENTIALS,
          url: APP_CONSTANTS.URLS.JIRA_CREDENTIALS,
          templateUrl: APP_CONSTANTS.TEMPLATE_URL.JIRA_CREDENTIALS,
          controller: APP_CONSTANTS.CONTROLLERS.JIRA_CREDENTIALS
        })
        .state({
          name: APP_CONSTANTS.NAME.PAGE_404,
          url: APP_CONSTANTS.URLS.PAGE_404,
          templateUrl: APP_CONSTANTS.TEMPLATE_URL.PAGE_404,
          controller: APP_CONSTANTS.CONTROLLERS.PAGE_404
        })
        .state({
          name: APP_CONSTANTS.NAME.JIRAUPDATE,
          url: APP_CONSTANTS.URLS.JIRAUPDATE,
          templateUrl: APP_CONSTANTS.TEMPLATE_URL.JIRAUPDATE,
          controller: APP_CONSTANTS.CONTROLLERS.JIRAUPDATE,
        })
        .state({
          name: APP_CONSTANTS.NAME.INVITE,
          url: APP_CONSTANTS.URLS.INVITE,
          templateUrl: APP_CONSTANTS.TEMPLATE_URL.INVITE,
          controller: APP_CONSTANTS.CONTROLLERS.INVITE,
          resolve: {
            data: function($q, inviteService) {
              return inviteService.getUserInvites()
            }
          },
        })
        .state({
          name: APP_CONSTANTS.NAME.MANAGER_INVITES,
          url: APP_CONSTANTS.URLS.MANAGER_INVITES,
          templateUrl: APP_CONSTANTS.TEMPLATE_URL.MANAGER_INVITES,
          controller: APP_CONSTANTS.CONTROLLERS.MANAGER_INVITES,
        });
      $urlRouterProvider.otherwise("/");
    }]);
