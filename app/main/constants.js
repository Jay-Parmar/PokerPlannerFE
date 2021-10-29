(function () {
    app.constant("APP_CONSTANTS", {
        BASE_URL: "http://127.0.0.1:8000",
        API_ENDPOINT: {
            SIGNUP: 'users/',
            LOGIN: 'users/login/',
            LOGOUT: 'users/logout/',
            ACCOUNT_ACTIVATE: 'users/activate/',
            GROUP: 'groups/',
            GROUP_DETAIL:'groups/:id',
            BOARD: 'board/',
            GROUP_MEMBER: 'groups/members',
            GET_USER_DETAILS: 'users/',
            CHANGE_PASSWORD: 'users/changepassword/',
            POKERBOARD: 'pokerboard/',   //HAVE TO FILL THIS
            MEMBERS: 'pokerboard/members',    // fill the url here to invite users or group  
            INVITE: 'invite/',
            JIRA_CREDENTIALS: 'pokerboard/manager',
            COMMENT: 'pokerboard/comment',
            VOTE: 'pokerboard/vote',
            VERIFY:'users/resend',
            MANAGER_INVITES: 'invite/managerinvites/'
        },
        TEMPLATE_URL: {
            SIGNUP: 'modules/signup/signup.html',
            LOGIN: 'modules/login/login.html',
            PROFILE: 'modules/profile/profile.html',
            VERIFY: 'modules/email verification/verifyMessage.html',
            GROUP: 'modules/group/create_group.html',
            GROUP_DETAIL:'modules/group/group_detail.html',
            BOARD: 'modules/voting-board/voting-board.html',
            EDIT_PASSWORD: 'modules/editPassword/editPassword.html',
            POKER_CREATE: 'modules/pokerboard/create_pokerboard.html',
            POKER_LIST: 'modules/pokerboard/list_pokerboard.html',
            POKER_DETAIL: 'modules/pokerboard/detail_pokerboard.html',
            MEMBERS: 'modules/poker-members/poker_members.html',
            JIRA_CREDENTIALS: 'modules/pokerboard/jiraCredentials.html',
            INVITE: 'modules/invite/invites.html',
            PAGE_404: 'modules/error_pages/404-page-not-found.html',
            ACCOUNT_ACTIVATE: 'modules/email verification/emailverification.html',
            MANAGER_INVITES: 'modules/invite/manager_invites.html'
        },
        CONTROLLERS: {
            SIGNUP: 'SignupController',
            LOGIN: 'LoginController',
            PROFILE: 'ProfileController',
            VERIFY: 'verifyMessageController',
            GROUP: 'groupCtrl',
            GROUP_DETAIL:'groupDetailController',
            BOARD: 'votingController',
            EDIT_PASSWORD: 'editPassword',
            POKER_CREATE: 'createBoardCtrl',
            POKER_LIST: 'pokerboardCtrl',
            POKER_DETAIL: 'pokerboardDetailsCtrl',
            MEMBERS: 'pokerboardMembersCtrl',
            JIRA_CREDENTIALS: 'jiraCredentialsCtrl',
            INVITE: 'inviteCtrl',
            ACCOUNT_ACTIVATE: 'emailVerificationCtrl',
            MANAGER_INVITES: 'managerCtrl'
        },
        URLS: {
            SIGNUP: '/',
            LOGIN: '/login',
            PROFILE: '/profile',
            ACCOUNT_ACTIVATE: '/activate/:uid/:token',
            GROUP:'/group',
            GROUP_DETAIL:'/group/:id',
            BOARD: '/board',
            EDIT_PASSWORD: '/editPassword',
            POKER_CREATE: '/pokerboard',
            POKER_LIST: '/pokerboards',
            POKER_DETAIL: '/pokerboard/:id/manager/:mid',
            MEMBERS: '/pokerboard/:pid/members',
            JIRA_CREDENTIALS: '/jiraCredentials',
            INVITE: '/invites',
            PAGE_404:'/404',
            VERIFY: '/verifyemail/:uid',
            MANAGER_INVITES: '/pokerboard/:pid/invites'
        },
        NAME: {
            SIGNUP: 'signup',
            LOGIN: 'login',
            PROFILE: 'profile',
            VERIFY: 'verifyemail',
            GROUP: 'group',
            GROUP_DETAIL:'group_detail',
            BOARD: 'board',
            EDIT_PASSWORD: 'editPassword',
            POKER_CREATE: 'pokercreate',
            POKER_LIST: 'pokerboards',
            POKER_DETAIL: 'pokerboard',
            MEMBERS: 'members',
            JIRA_CREDENTIALS: 'jiraCredentials',
            INVITE: 'invite',
            PAGE_404: 'PAGE_404',
            ACCOUNT_ACTIVATE:'activate_account',
            MANAGER_INVITES: 'manager_invites'
        },
        DECK_NAME: {
            1: 'Serial',
            2: 'Even',
            3: 'Odd',
            4: 'Fibonacci',
            5: 'Custom'
        },
        DEFAULT_DECK_OPTION: {
            SERIAL: '1',
        },
        DECK_TYPE: {
            1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            2: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18],
            3: [0, 1, 3, 5, 7, 9, 11, 13, 15, 17],
            4: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55],
            5: "",
        },
    });
})();
