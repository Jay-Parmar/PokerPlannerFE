app.run(function ($transitions, $cookies, APP_CONSTANTS) {

    $transitions.onBefore({from: APP_CONSTANTS.URLS.SIGNUP, to: '*'}, function(transition) {
        if(!$cookies.get('token') && transition.to().name != APP_CONSTANTS.URLS.LOGIN){
            return false;
        }
    });
    
    $transitions.onBefore({from:APP_CONSTANTS.URLS.LOGIN, to: '*'}, function(transition) {
        if(!$cookies.get('token') && transition.to().name != APP_CONSTANTS.URLS.SIGNUP){
            return false;
        }
    });

    $transitions.onBefore({from:'*', to: APP_CONSTANTS.URLS.LOGIN}, function(transition) {
        if($cookies.get('token')){
            return false;
        }
    });

    $transitions.onBefore({from:'*', to: APP_CONSTANTS.URLS.SIGNUP}, function(transition) {
        if($cookies.get('token')){
            return false;
        }
    });
});
