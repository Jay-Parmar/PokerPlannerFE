app.controller('pokerboardCtrl', [
    '$state', '$scope', 'pokerboardService',
    function($state, $scope, pokerboardService){
        
        $scope.goToPokerboard = id => {
            $state.go('pokerboard', { "id": id });
        }

        pokerboardService.getPokerboards().then(response => {
            $scope.boardList = [];
            response.forEach(parse);
            const parse = ele => {
                $scope.boardList.push({
                    id: ele.id,
                    title: ele.title,
                    description: ele.description,
                    date: new Date(ele.created_at).toLocaleDateString(),
                    creator: ele.manager,
                });
            };
        }, error => {
            console.log(error);
            alert("Get request failed!");
        });
    }
]);
