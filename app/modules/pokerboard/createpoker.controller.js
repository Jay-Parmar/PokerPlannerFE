app.controller('createBoardCtrl', [
    '$scope', '$state', 'pokerboardService', 'APP_CONSTANTS', 
    function($scope, $state, pokerboardService, APP_CONSTANTS){

        $scope.board = {};
        $scope.errmsg = null

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
            ticketid = $scope.board.ticketid!=undefined && $scope.board.ticketid.split(',')
            sprintid = $scope.board.sprintid!=undefined && $scope.board.sprintid
            const data = {
                title: $scope.board.title,
                description: $scope.board.description,
                estimation_type: $scope.board.selectedType,
                timer: $scope.board.duration,
                estimation_cards: $scope.deckValue,
            };
            if(ticketid){
                data.tickets = ticketid
            }
            if(sprintid){
                data.sprint_id = sprintid
            }
            pokerboardService.createBoard(data).then(response => {
                console.log(response);
                $state.go("pokerboards");
            }, error => {
                $scope.errmsg = error.data[0]
            });
        };
    }
]);
