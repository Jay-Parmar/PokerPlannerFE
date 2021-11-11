// app.run(function ($transitions, $cookies, APP_CONSTANTS, Restangular, $state){

//     $transitions.onBefore({from: APP_CONSTANTS.NAME.SIGNUP, to: '*'}, function(transition){
//         if(!$cookies.get('token') && transition.to().name != APP_CONSTANTS.NAME.LOGIN
//         && transition.to().name != APP_CONSTANTS.NAME.VERIFY
//         && transition.to().name != APP_CONSTANTS.NAME.HOMEPAGE
//         && transition.to().name != APP_CONSTANTS.NAME.ACCOUNT_ACTIVATE){
//             return false;
//         }
//     });

//     $transitions.onBefore({from: APP_CONSTANTS.NAME.HOMEPAGE, to: '*'}, function(transition){
//         if(!$cookies.get('token') && transition.to().name != APP_CONSTANTS.NAME.LOGIN
//         && transition.to().name != APP_CONSTANTS.NAME.VERIFY
//         && transition.to().name != APP_CONSTANTS.NAME.HOMEPAGE
//         && transition.to().name != APP_CONSTANTS.NAME.ACCOUNT_ACTIVATE){
//             return false;
//         }
//     });
    
//     $transitions.onBefore({from: APP_CONSTANTS.NAME.LOGIN, to: '*'}, function(transition){
//         if(!$cookies.get('token') && transition.to().name != APP_CONSTANTS.NAME.SIGNUP
//         && transition.to().name != APP_CONSTANTS.NAME.VERIFY 
//         && transition.to().name != APP_CONSTANTS.NAME.HOMEPAGE
//         && transition.to().name != APP_CONSTANTS.NAME.ACCOUNT_ACTIVATE){
//             return false;
//         }
//     });

//     $transitions.onBefore({from: '*', to: APP_CONSTANTS.NAME.LOGIN}, function(transition){
//         if($cookies.get('token')){
//             return false;
//         }
//     });

//     $transitions.onBefore({from: '*', to: APP_CONSTANTS.NAME.SIGNUP}, function(transition){
//         if($cookies.get('token')){
//             return false;
//         }
//     });

//     Restangular.setFullRequestInterceptor((element, operation, route, url, headers, params, httpConfig) => {
//         const authToken = $cookies.get('token')
//         if(authToken){
//             headers.Authorization = `Token ${authToken}`;
//         }
//         return {headers};
//     });

// });

app.run(function ($state, $transitions, $cookies, Restangular) {
    $transitions.onSuccess( {}, function (transition) {
        const loginStates = ['login', 'signup', 'homepage', 'verifyemail', 'activate_account'];
        var from = transition.from().name
        var to = transition.to().name
        if($cookies.get('token') != null){
            if(loginStates.includes(to)){
                $state.go('pokerboards')
            }
        }else{
            if(!loginStates.includes(to)){
                $state.go('login')
            }
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
})


