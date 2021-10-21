app.run(function ($transitions, $cookies, APP_CONSTANTS){

    $transitions.onBefore({from: APP_CONSTANTS.NAME.SIGNUP, to: '*'}, function(transition){
        if(!$cookies.get('token') && transition.to().name != APP_CONSTANTS.NAME.LOGIN){
            return false;
        }
    });
    
    $transitions.onBefore({from: APP_CONSTANTS.NAME.LOGIN, to: '*'}, function(transition){
        if(!$cookies.get('token') && transition.to().name != APP_CONSTANTS.NAME.SIGNUP){
            return false;
        }
    });

    $transitions.onBefore({from: '*', to: APP_CONSTANTS.NAME.LOGIN}, function(transition){
        if($cookies.get('token')){
            return false;
        }
    });

    $transitions.onBefore({from: '*', to: APP_CONSTANTS.NAME.SIGNUP}, function(transition){
        if($cookies.get('token')){
            return false;
        }
    });
});
