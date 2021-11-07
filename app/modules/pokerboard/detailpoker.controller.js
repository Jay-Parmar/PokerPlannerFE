app.controller('pokerboardDetailsCtrl', [
    '$state', '$scope', '$rootScope', '$stateParams', 'pokerboardService', 'APP_CONSTANTS', '$cookies', '$mdToast',
    function ($state, $scope, $rootScope, $stateParams, pokerboardService, APP_CONSTANTS, $cookies, $mdToast) {
        
        $scope.pokerboard = {};
        const manager_id = $stateParams.mid
        $scope.show = $cookies.get("id") == manager_id
        console.log($scope.show)
        const pokerboardId = $stateParams.id;  //send id with detail request
        $scope.email = "";
        $scope.isEditing = false;
        $scope.emailInviteForm = true;

        $scope.user = $rootScope.user

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
            $scope.pokerboard.estimated = $scope.pokerboard.ticket.filter(obj=>obj.estimate);
            $scope.pokerboard.tickets = $scope.pokerboard.ticket
                                        .filter(obj=>!obj.estimate).sort((a,b)=>a.order-b.order);
        }, error => {
            $mdToast.show({
                template: '<md-toast>' +
                '<div class="md-toast-content" id="toaster">' +
                  'Oops! Something went wrong' +
                '</div>' +
              '</md-toast>',
                hideDelay: 4000,
                position: 'bottom'
            })
            console.log(error);
        });

        $scope.inviteUser = () => {
            let user = {}
            if($scope.email==''){
                user = {
                    group_id: $scope.group,
                    role: $scope.role,
                    pokerboard: pokerboardId
                }
            }
            else{
                user = {
                    email: $scope.email,
                    role: $scope.role,
                    pokerboard: pokerboardId
                }
            }
            pokerboardService.inviteUser(user).then(response => {
                $mdToast.show({
                    template: '<md-toast>' +
                    '<div class="md-toast-content" id="toaster">' +
                      'User/Group Invited Successfully' +
                    '</div>' +
                  '</md-toast>',
                    hideDelay: 4000,
                    position: 'bottom'
                })
                console.log(response);
            }, error => {
                console.log(error)
                msg = error.data[0];
                $mdToast.show({
                    template: '<md-toast>' +
                    '<div class="md-toast-content" id="toaster">' +
                      msg+
                    '</div>' +
                  '</md-toast>',
                    hideDelay: 4000,
                    position: 'bottom'
                })
            });
        }
        $scope.managerinvites = function(){
            $state.go('manager_invites', {"pid": pokerboardId});
        }
    }
]);
