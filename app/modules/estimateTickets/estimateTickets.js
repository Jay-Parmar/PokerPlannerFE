app.controller('estimateTicketsCtrl',function($scope, estimateTicketsService){

    estimateTicketsService.getTickets().then(function(response){
        $scope.ticketlist = response
        console.log(response)
    }, function(response){
        console.log(response)
    })
})