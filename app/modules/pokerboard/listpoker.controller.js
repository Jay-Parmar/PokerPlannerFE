app.controller('pokerboardCtrl', [
    '$state', '$scope', 'pokerboardService',
    function($state, $scope, pokerboardService){
        
        $scope.goToPokerboard = id => {
            $state.go('pokerboard', { "id": id });
        }

        pokerboardService.getPokerboards().then(response => {
            $scope.boardList = [];
            console.log(response)
            const parse = ele => {
                $scope.boardList.push({
                    id: ele.id,
                    title: ele.title,
                    description: ele.description,
                    date: new Date(ele.created_at).toLocaleDateString(),
                    manager_name: ele.manager.first_name + " " + ele.manager.last_name,
                    manager: ele.manager,
                });
            };
            response.forEach(parse);
        }, error => {
            console.log(error);
            alert("Get request failed!");
        });
    }
]);
