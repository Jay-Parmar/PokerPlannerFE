app.controller('emailVerificationCtrl', [
    '$scope', '$state', 'emailverificationservices', 'APP_CONSTANTS', '$stateParams',

    function (
        $scope, $state, emailverificationservices, APP_CONSTANTS, $stateParams
    ) {
        $scope.verify = () => {
            console.log($stateParams.uid)
            console.log($stateParams.token)
            emailverificationservices.activateAccount($stateParams.uid, { 'token': $stateParams.token })
            .then(response => {
                $scope.statusMsg = 'Account activated successfully';
                $state.go(APP_CONSTANTS.NAME.LOGIN)
            }, error => {
                $scope.statusMsg = 'Invalid email activation link';
            });
        };
    }
]);
