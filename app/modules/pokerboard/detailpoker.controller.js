app.controller('pokerboardDetailsCtrl', [
    '$state', '$scope', '$stateParams', 'pokerboardService', 'APP_CONSTANTS',
    function ($state, $scope, $stateParams, pokerboardService, APP_CONSTANTS) {
        
        $scope.pokerboard = {};
        const pokerboardId = $stateParams.id;  //send id with detail request
        $scope.email = "";
        $scope.isEditing = false;
        $scope.emailInviteForm = true;

        $scope.showEmailForm = () => {
            $scope.emailInviteForm = true;
        }

        $scope.showGroupForm = () => {
            $scope.emailInviteForm = false;
        }
        
        $scope.moveDown = (idx) => {
            const tickets = [...$scope.pokerboard.tickets];
            if(idx!=tickets.length-1){
                let temp = tickets[idx];
                tickets[idx] = tickets[idx+1];
                tickets[idx+1] = temp;
                if(!$scope.isEditing){
                    $scope.isEditing = true;
                }
                $scope.pokerboard.tickets = tickets;
            }
        }

        $scope.moveUp = (idx) => {
            const tickets = [...$scope.pokerboard.tickets];
            if(idx!=0){
                let temp = tickets[idx];
                tickets[idx] = tickets[idx-1];
                tickets[idx-1] = temp;
                if(!$scope.isEditing){
                    $scope.isEditing = true;
                }
                $scope.pokerboard.tickets = tickets;
            }
        }

        $scope.saveOrder = () => {
            const tickets = [...$scope.pokerboard.tickets].map((ticket, idx)=>{
                ticket.order = idx+1;
                return ticket;
            });
            pokerboardService.orderTickets(tickets, $scope.pokerboard.id);
            $scope.isEditing = false;
        }

        $scope.goToMembers = () => {
            $state.go('members', {"pid": pokerboardId});
        }

        pokerboardService.getPokerboardDetails(pokerboardId).then(response => {
            $scope.pokerboard = response;
            $scope.pokerboard.estimated = $scope.pokerboard.tickets.filter(obj=>obj.estimate);
            $scope.pokerboard.tickets = $scope.pokerboard.tickets
                                        .filter(obj=>!obj.estimate).sort((a,b)=>a.order-b.order);
        }, error => {
            alert("Something went wrong!");
            console.log(error);
        });

        $scope.inviteUser = () => {
            const user = {
                type: ($scope.emailInviteForm) ? 1 : 2,
                user_email: ($scope.emailInviteForm) ? $scope.email : null,
                pokerboard: $stateParams.id,
                group_name: ($scope.emailInviteForm) ? null : $scope.group,
                role: $scope.role
            }

            pokerboardService.inviteUser(user).then(response => {
                alert("User/Group invited");
                console.log(response);
            }, error => {
                console.log(error);
                alert("Error while inviting user");
            });
        }
    }
]);
