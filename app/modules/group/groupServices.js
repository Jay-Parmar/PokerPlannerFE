app.service('groupServices', ['Restangular', 'APP_CONSTANTS','$cookies',
    function (Restangular, APP_CONSTANTS, $cookies){

        Restangular.setDefaultHeaders({
            Authorization: `Token ${$cookies.get('token')}`
        });
        
        this.getUsers = function(){
            return $http.get('assets/tempgroups.json')
        }

        this.createGroup = function(groupName){
            return Restangular.all(APP_CONSTANTS.API_ENDPOINT.GROUP).post(groupName);
        }

        this.addMember = function(email, group){
            const user = { email, group };
            return Restangular.all(APP_CONSTANTS.API_ENDPOINT.GROUP_MEMBER).post(user);
        }

        this.getGroupDetails = function(groupId){
            return Restangular.one(APP_CONSTANTS.API_ENDPOINT.GROUP, groupId).get();
        }

        this.getGroups = function(){
            return Restangular.all(APP_CONSTANTS.API_ENDPOINT.GROUP).getList();
        }
    }
]); 
