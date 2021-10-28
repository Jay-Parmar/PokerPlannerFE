app.run(function ($transitions, $cookies, APP_CONSTANTS, Restangular){

    $transitions.onBefore({from: APP_CONSTANTS.NAME.SIGNUP, to: '*'}, function(transition){
        if(!$cookies.get('token') && transition.to().name != APP_CONSTANTS.NAME.LOGIN
        && transition.to().name != APP_CONSTANTS.NAME.VERIFY
        && transition.to().name != APP_CONSTANTS.NAME.ACCOUNT_ACTIVATE){
            return false;
        }
    });
    
    $transitions.onBefore({from: APP_CONSTANTS.NAME.LOGIN, to: '*'}, function(transition){
        if(!$cookies.get('token') && transition.to().name != APP_CONSTANTS.NAME.SIGNUP
        && transition.to().name != APP_CONSTANTS.NAME.VERIFY 
        && transition.to().name != APP_CONSTANTS.NAME.ACCOUNT_ACTIVATE){
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

    Restangular.setFullRequestInterceptor((element, operation, route, url, headers, params, httpConfig) => {
        const authToken = $cookies.get('token')
        if(authToken){
            headers.Authorization = `Token ${authToken}`;
        }
        return {headers};
    });

});
