app.controller('votingController', function (APP_CONSTANTS, $scope, $state, votingService, $stateParams, $cookies, $interval, $mdToast){
    const authToken = $cookies.get('token')
    const sessionId = $stateParams.id
    const pokerboardId = $stateParams.pid
    $scope.participantList = []
    $scope.voteList = []

    const setIssueDetails = () => {
      // Fetching JIRA issue to be estimated
      votingService.getIssue({"ticket_id": sessionId}).then(response => {
        $scope.ticketTitle = response.title;
        $scope.ticketDescription = response.description;
      }, error => {

      });
    }

    $scope.postComment = () => {
      console.log("Hey")
      /* Posting new comment on JIRA */
      votingService.postComment({"ticket_id": sessionId, "comment": $scope.comment}).then(response => {

      }, error => {

      });
    };

    $scope.getComments = () => {
      votingService.getComments({"ticket_id": sessionId}).then(response => {
        console.log("scope response::: ", response)
        $scope.comments = response["comments"].map(obj => {
          return {
            body: obj
          }
        });
        console.log("scope commentsa::: ",$scope.comments)
      }, error => {

      });
    };

    const updateParticipants = data => {
      /* Updating Participants in UI */
      $scope.participantList = [];
      const parseUsers = ele => {
          if($scope.user == ele.user.id && ele.role == APP_CONSTANTS.ROLES.SPECTATOR)
            $scope.isSpectator = true
          let name = ele.user.first_name + " " + ele.user.last_name;
          $scope.participantList.push(name);
      }
      data.forEach(parseUsers);
      console.log($scope.participantList)
    }

    const updateVote = (id, estimate) => {
      /* Updating already voted estimate of user */
      for (let i = 0; i < $scope.voteList.length; i++) {
          if ($scope.voteList[i].id == id) {
              $scope.voteList.splice(i, 1);
              return;
          }
      }
    }

    const addRealTimeVotedUser = data => {
      /* Adding user who voted to the list for UI */
      updateVote(data.user.id, data.user.estimate);
      $scope.voteList = $scope.voteList.filter(ele => ele.id != data.user.id);
      let first_name = data.user.first_name;
      let last_name = data.user.last_name;
      if (data.user.id == $cookies.get('id')) {
          elevateCard($scope.cardList.indexOf(data.estimate));
      }
      $scope.voteList.push(
          {
              id: data.user.id,
              name: first_name + " " + last_name,
              estimate: data.estimate,
          },
      );
    }

    const initializeGame = data => {
      /* Initializing game after successfull connection with websocket */
      $scope.voteList = [];
      //update participants list as user joins
      updateParticipants(data.users);
      // show user those who have already made their votes
      const parseVotes = ele => {
          addRealTimeVotedUser(ele);
      }
      data.votes.forEach(parseVotes);
      // Show correct timer to user
      setCountdown(data.timer);
    }

    const setUserVote = number => {
      /* Broadcast current user vote */
      const voteData = {
          message: {
              estimate: number,
          },
          message_type: APP_CONSTANTS.MESSAGE_TYPE.VOTE
      }
      $scope.websocket.send(voteData);
    }

    const elevateCard = id => {
      /* Highlighting current user's voted card */
      if ($scope.prevCard != undefined) 
      document.getElementById("card" + $scope.prevCard).classList.remove("selected-card");
      document.getElementById("card" + id).classList.add("selected-card");
      $scope.prevCard = id;
    }

    $scope.setEstimate = function (id, number) {
      /* Card click function */
      if ($scope.prevCard === id) {
          return;
      }
      elevateCard(id);
      setUserVote(number);
    }

    const onGameSkipped = () => {
      /* Navigate to estimation page */
      $state.go(APP_CONSTANTS.NAME.POKER_DETAIL, { id: pokerboardId });
    };

    $scope.skipGame = () => {
      /* Skipping the current game */
      const data = {
          message: "Skip game",
          message_type: APP_CONSTANTS.MESSAGE_TYPE.SKIP
      }
      $scope.websocket.send(data);
    }

    $scope.startCountdown = () => {
      /* Countdown timer broadcast */
      const data = {
          message: "Start Timer",
          message_type: APP_CONSTANTS.MESSAGE_TYPE.START_TIMER
      }
      $scope.websocket.send(data);
      $state.reload()
    }

    const setSocketConnection = sessionId => {
      /* Establishing web socket connection */
      $scope.websocket = votingService.wsConnect(sessionId, authToken, pokerboardId)
      $scope.websocket.send({ "message": "Member Joined", "message_type": APP_CONSTANTS.MESSAGE_TYPE.INITIALIZE_GAME });
      $scope.websocket.onMessage(function (message) {
          const obj = JSON.parse(message.data);
          console.log(message)
          switch (obj.type) {
              case APP_CONSTANTS.MESSAGE_TYPE.INITIALIZE_GAME: initializeGame(obj);
                  break;
              case APP_CONSTANTS.MESSAGE_TYPE.SKIP: onGameSkipped();
                  break;
              case APP_CONSTANTS.MESSAGE_TYPE.VOTE: addRealTimeVotedUser(obj.vote);
                  break;
              case APP_CONSTANTS.MESSAGE_TYPE.START_TIMER: setCountdown(obj.start_datetime);
                  break;
              case APP_CONSTANTS.MESSAGE_TYPE.ESTIMATE: $state.go(APP_CONSTANTS.NAME.POKER_DETAIL, { id: pokerboardId });
                  break;
              case APP_CONSTANTS.MESSAGE_TYPE.LEAVE: updateParticipants(obj.users);
                  break;
              case APP_CONSTANTS.MESSAGE_TYPE.ERROR: showError(obj.error)
          }
      })
    }

    const showError = (message) => {
      // Countdown helper
      $mdToast.show({
          template: '<md-toast>' +
          '<div class="md-toast-content" id="toaster">' +
            message +
          '</div>' +
        '</md-toast>',
          hideDelay: 4000,
          position: 'bottom'
      })
    }

    const countdown = () => {
      // Countdown helper

          // $scope.$apply();    
          $scope.time--;
          if ($scope.time == 0) {
            $scope.estimated = true;
            console.log("Trigger Event");
          }
      // $scope.$apply();
    }

    const setCountdown = timer => {
      // Setting up countdown timer
      $scope.time = 0;
      if (timer === "null") {
          return;
      }
      timer = timer.substring(1, timer.length - 1);
      let startTime = new Date(timer);
      let currentTime = new Date();
      // $scope.time = Math.round($scope.duration - (currentTime - startTime) / 1000);
      $scope.time = $scope.duration - Math.ceil((currentTime.getTime() - startTime.getTime()) / 1000)
      // $scope.time = 10
      console.log($scope.time)
      if ($scope.time <= 0) {
          clearInterval($scope.timerId);
          $scope.time = 0;
          $scope.estimated = true;

          // $scope.$apply();
          return;
      }
      $scope.timerId = $interval(countdown, 1000, $scope.time);
    }

    const onSession = (response) => {
      // check if ticket status is ongoing or not
      setSocketConnection(response.id);
      setIssueDetails();
    }

    const setCards = (type, estimation_cards) => {
      /* Setting card type */
      if(type == 5){
        if(estimation_cards != null)
          $scope.cardList = estimation_cards
        else
          $scope.cardList = APP_CONSTANTS.DECK_TYPE[1]
      }else{
        $scope.cardList = APP_CONSTANTS.DECK_TYPE[type]
      }
    }

    const init = () => {  
      votingService.getSession(sessionId).then(response => {
          onSession(response);
          //set pokerboard configurations
          $scope.user = $cookies.get('id')
          $scope.isAdmin = response.pokerboard.manager.id == $scope.user;
          $scope.duration = response.pokerboard.timer;
          $scope.title = response.pokerboard.title;
          $scope.description = response.pokerboard.description;
          setCards(response.pokerboard.estimate_type, response.pokerboard.estimation_cards);
      }, error => {
          $state.go(APP_CONSTANTS.NAME.PAGE_404);
      })
    }
    
    $scope.setTicketEstimate = () => {
      const estimateData = {
          message: {
              estimate: $scope.finalEstimate,
          },
          message_type: APP_CONSTANTS.MESSAGE_TYPE.ESTIMATE
      }
      $scope.websocket.send(estimateData);
    }

    init()
  });
  