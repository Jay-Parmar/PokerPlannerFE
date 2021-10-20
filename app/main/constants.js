(function () {
    app.constant("APP_CONSTANTS", {
        BASE_URL: "http://127.0.0.1:8000",
        API_ENDPOINT: {
            SIGNUP: 'users/',
            LOGIN: 'users/login/',
            ACCOUNT_ACTIVATE: 'users/activate/:uid/:token',
            GROUP: 'groups/',
            GROUP_DETAIL:'group/:id',
            BOARD: 'board/',
            REMOVE_GROUP_USER: 'groups/remove',
            ADD_GROUP_USER: 'groups/add',
            GET_USER_DETAILS: 'users/',
            CHANGE_PASSWORD: 'users/changepassword/',
        },
        TEMPLATE_URL: {
            SIGNUP: 'modules/signup/signup.html',
            LOGIN: 'modules/login/login.html',
            PROFILE: 'modules/profile/profile.html',
            VERIFY: 'modules/email verification/emailverification.html',
            GROUP: 'modules/group/create_group.html',
            GROUP_DETAIL:'modules/group/group_detail.html',
            BOARD: 'modules/voting-board/voting-board.html',
            EDIT_PASSWORD: 'modules/editPassword/editPassword.html',
        },
        CONTROLLERS: {
            SIGNUP: 'SignupController',
            LOGIN: 'LoginController',
            PROFILE: 'ProfileController',
            VERIFY: 'emailVerificationCtrl',
            GROUP: 'groupCtrl',
            GROUP_DETAIL:'groupDetailController',
            BOARD: 'votingController',
            EDIT_PASSWORD: 'editPassword',
        },
        URLS: {
            SIGNUP: '/',
            LOGIN: '/login',
            PROFILE: '/profile',
            VERIFY: '/activate/:uid/:token',
            GROUP:'/group',
            GROUP_DETAIL:'/group/:id',
            BOARD: '/board',
            EDIT_PASSWORD: '/editPassword'
        },
        NAME: {
            SIGNUP: 'signup',
            LOGIN: 'login',
            PROFILE: 'profile',
            VERIFY: 'verify',
            GROUP: 'group',
            GROUP_DETAIL:'group_detail',
            BOARD: 'board',
            EDIT_PASSWORD: 'editPassword'
        },
    });
})();
