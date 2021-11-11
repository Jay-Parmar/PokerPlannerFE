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
            $scope.estimation_cards = ($scope.selectedType!=5) ? APP_CONSTANTS.DECK_TYPE[$scope.selectedType] : 
                                       $scope.deckValue.split(',');
            let ticketid = $scope.board.ticketid!=undefined && $scope.board.ticketid.length != 0 && $scope.board.ticketid.split(',')
            let sprintid = $scope.board.sprintid!=undefined && $scope.board.sprintid
            let jql = $scope.board.jql!=undefined && $scope.board.jql
            
            $scope.estimation_cards = $scope.estimation_cards.filter(
                function(value, index){ 
                    return $scope.estimation_cards.indexOf(value) == index 
                }
            );
            const data = {
                title: $scope.board.title,
                description: $scope.board.description,
                estimate_type: $scope.selectedType,
                timer: $scope.board.duration,
                estimation_cards: $scope.estimation_cards,
            };
            console.log(data)
            if(ticketid){
                data.tickets = ticketid
            }
            if(sprintid){
                data.sprint_id = sprintid
            }
            if(jql){
                data.jql = jql
            }
            pokerboardService.createBoard(data).then(response => {
                console.log(response);
                $state.go("pokerboards");
            }, error => {
                if(error.data.title != undefined)
                    $scope.errmsg = error.data.title[0]
                else
                $scope.errmsg = error.data[0]
                console.log(error)
            });
        };
    }
]);
