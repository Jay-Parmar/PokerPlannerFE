app.controller('verifyMessageController', [
    '$scope', '$state', 'verifyMessageServices', '$stateParams',

    function (
        $scope, $state, verifyMessageServices, $stateParams
    ) {
        $scope.goToLogin = () => {
            $state.go('login');
        };

        $scope.resend = () => {
            verifyMessageServices.resendEmail({ 'user': $stateParams.uid })
            .then(response => {
                $scope.statusMsg = 'Verification email has been sent';
            }, error => {
                $scope.statusMsg = error.data.non_field_errors[0]
            });
        };
    }
]);
