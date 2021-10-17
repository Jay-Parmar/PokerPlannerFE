app.service('groupServices', ['Restangular', 'APP_CONSTANTS', '$http',
    function (Restangular, APP_CONSTANTS, $http){
        this.getUsers = function(){
            return $http.get('assets/tempgroups.json')
        }

        this.createGroup = function(groupName){
            return Restangular.all(APP_CONSTANTS.API_ENDPOINT.GROUP).post(groupName);
        }

        this.addMember = function(email, group){
            const user = { email, group };
            return Restangular.all(APP_CONSTANTS.API_ENDPOINT.ADD_GROUP_USER).post(user);
        }

        this.getGroupDetails = function(groupId){
            return Restangular.one(APP_CONSTANTS.API_ENDPOINT.GROUP, groupId).get();
        }

        this.getGroups = function(){
            return Restangular.all(APP_CONSTANTS.API_ENDPOINT.GROUP).getList();
        }
    }
]); 
