app.directive('navBar', function($state, $cookies, APP_CONSTANTS, pokerboardService) {
    return {
      scope: {},
      link: function(scope) {
          scope.logout = function() {
            pokerboardService.logout().then(function(){
                  $cookies.remove("token");
                  $cookies.remove("id");
                  $cookies.remove("user");
                  $state.go("login");
              },function(err){
                  console.log(err)
              });
          }
  
          scope.navLinks = {
              HOME:{
                  'ui-sref': APP_CONSTANTS.NAME.POKER_LIST,
                  'link': 'Home'
              },
              CREATEPOKERBOARD:{
                'ui-sref': APP_CONSTANTS.NAME.JIRA_CREDENTIALS,
                'link': 'CreatePokerboard'
              },
              GROUPS: {
                  'ui-sref': APP_CONSTANTS.NAME.GROUP,
                  'link': 'Groups'
              },
              MYINVITES: {
                  'ui-sref': APP_CONSTANTS.NAME.INVITE,
                  'link': 'MyInvites'
              },
              PROFILE: {
                  'ui-sref': APP_CONSTANTS.NAME.PROFILE,
                  'link': 'Profile'
              },
          }
      },
      templateUrl:'modules/navbar/navbar.html'
    };
  });