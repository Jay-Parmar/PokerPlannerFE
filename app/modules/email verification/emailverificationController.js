app.controller('emailVerificationCtrl', [
    '$scope', '$state', 'emailverificationservices', '$stateParams',

    function (
        $scope, $state, emailverificationservices, $stateParams
    ) {
        $scope.goToLogin = () => {
            $state.go('login');
        };

        // emailverificationservices.activateAccount($stateParams.uid, { 'token': $stateParams.token })
        //     .then(response => {
        //         $scope.statusMsg = 'Account activated successfully';
        //     }, error => {
        //         $scope.statusMsg = 'Invalid email activation link';
        //     });
    }
]);
