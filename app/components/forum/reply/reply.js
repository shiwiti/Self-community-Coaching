


            if($scope.discussion.reply.content){      // verify reply is not empty                  
                discussions.addReply($routeParams.discussionsIndex, $scope.discussion.reply);
                $location.path("/forum");
            }
            else {
                alert("נא ודא תוכן בשדה תגובה" )
            }
    