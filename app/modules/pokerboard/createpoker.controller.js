app.controller('createBoardCtrl', [
    '$scope', '$state', 'APP_CONSTANTS', 
    function($scope, $state, APP_CONSTANTS){

        $scope.board = {};

        $scope.selectedType = APP_CONSTANTS.DEFAULT_DECK_OPTION.SERIAL;
        $scope.deckType = Object.keys(APP_CONSTANTS.DECK_NAME).map(
            function(value){
                return {
                    val: value,
                    name: APP_CONSTANTS.DECK_NAME[value],
                }
            }
        );

        $scope.$watch('selectedType', function() {
            $scope.deckValue = APP_CONSTANTS.DECK_TYPE[$scope.selectedType];
        });

        $scope.submit = () => {
            // Creating the pokerboard from desired data
            $scope.estimation_cards = ($scope.selectedType!==5) ? APP_CONSTANTS.DECK_TYPE[$scope.selectedType] : 
                                       $scope.deckValue.split(',');
            const data = {
                title: $scope.name,
                description: $scope.description,
                estimation_type: $scope.selectedType,
                timer: $scope.duration,
                estimation_cards: $scope.estimation_cards
            };
            pokerboardService.createBoard(data).then(response => {
                console.log(response);
                $state.go("pokerboards");
            }, error => {
                alert("Something went wrong!");
                console.log(error)
            });
        };
    }
]);
