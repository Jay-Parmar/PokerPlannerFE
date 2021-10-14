(function () {
    app.constant("APP_CONSTANTS", {
        BASE_URL: "http://127.0.0.1:8000",
        API_ENDPOINT: {
            SIGNUP: 'users/',
            LOGIN: 'users/login/',
            GET_USER_DETAILS: 'users/',
            ACCOUNT_ACTIVATE: '',
            CHANGE_PASSWORD: 'users/changepassword/',
        },
        TEMPLATE_URL: {
            SIGNUP: 'modules/signup/signup.html',
            LOGIN: 'modules/login/login.html',
            PROFILE: 'modules/profile/profile.html',
            VERIFY: 'modules/email verification/emailverification.html',
            EDIT_PASSWORD: 'modules/editPassword/editPassword.html',
        },
        CONTROLLERS: {
            SIGNUP: 'SignupController',
            LOGIN: 'LoginController',
            PROFILE: 'ProfileController',
            VERIFY: 'emailVerificationCtrl',
            EDIT_PASSWORD: 'editPassword',
        },
        URLS: {
            SIGNUP: '/',
            LOGIN: '/login',
            PROFILE: '/profile',
            VERIFY: '/verify',
            EDIT_PASSWORD: '/editPassword'
        },
        NAME: {
            SIGNUP: 'signup',
            LOGIN: 'login',
            PROFILE: 'profile',
            VERIFY: 'verify',
            EDIT_PASSWORD: 'editPassword'
        },
    });
})();
