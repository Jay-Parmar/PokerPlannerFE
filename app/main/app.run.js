app.run(function ($transitions, $cookies, APP_CONSTANTS, Restangular, $state){

    $transitions.onBefore({from: APP_CONSTANTS.NAME.SIGNUP, to: '*'}, function(transition){
        if(!$cookies.get('token') && transition.to().name != APP_CONSTANTS.NAME.LOGIN
        && transition.to().name != APP_CONSTANTS.NAME.VERIFY
        && transition.to().name != APP_CONSTANTS.NAME.HOMEPAGE
        && transition.to().name != APP_CONSTANTS.NAME.ACCOUNT_ACTIVATE){
            return false;
        }
        console.log("A");
    });
    
    $transitions.onBefore({from: APP_CONSTANTS.NAME.LOGIN, to: '*'}, function(transition){
        if(!$cookies.get('token') && transition.to().name != APP_CONSTANTS.NAME.SIGNUP
        && transition.to().name != APP_CONSTANTS.NAME.VERIFY 
        && transition.to().name != APP_CONSTANTS.NAME.HOMEPAGE
        && transition.to().name != APP_CONSTANTS.NAME.ACCOUNT_ACTIVATE){
            return false;
        }
        console.log("B");
    });

    $transitions.onBefore({from: '*', to: APP_CONSTANTS.NAME.LOGIN}, function(transition){
        if($cookies.get('token')){
            return false;
        }
        console.log("C");
    });

    $transitions.onBefore({from: '*', to: APP_CONSTANTS.NAME.SIGNUP}, function(transition){
        if($cookies.get('token')){
            return false;
        }
        console.log("D");
    });

    Restangular.setFullRequestInterceptor((element, operation, route, url, headers, params, httpConfig) => {
        const authToken = $cookies.get('token')
        if(authToken){
            headers.Authorization = `Token ${authToken}`;
        }
        return {headers};
    });

});
