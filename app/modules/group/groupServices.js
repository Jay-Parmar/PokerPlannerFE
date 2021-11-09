app.service('groupServices', ['Restangular', 'APP_CONSTANTS','$cookies',
    function (Restangular, APP_CONSTANTS, $cookies){

        console.log("HEY")
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
            url = APP_CONSTANTS.API_ENDPOINT.GROUP + '/' + groupId + '/'
            return Restangular.one(url).get();
        }

        this.getGroups = function(){
            return Restangular.all(APP_CONSTANTS.API_ENDPOINT.GROUP).getList();
        }

        // this.removeMember = function(email, group){
        //     const user = {email, group};
        //     return Restangular.all(APP_CONSTANTS.API_ENDPOINT.GROUP_MEMBER).remove(user)
        // }
    }
]); 
