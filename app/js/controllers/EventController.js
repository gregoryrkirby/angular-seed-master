'use strict';

eventsApp.controller('EventController',
    function EventController($scope, $sce){
        $scope.snippet = '<span style="color: red">Hello World</span>';
        $scope.trustedSnippet = $sce.trustAsHtml('<span style="color: red">Hello World</span>');
        $scope.myStyle = { color:'red'};
        $scope.myClass = 'blue';
        $scope.visible = true;
        $scope.event = {
            name : 'Angular Boot Camp',
            date : '1/1/2013',
            time : '10:30 am',
            location : {
                address: 'GeoDecisions Office',
                city: 'Middletown',
                state: 'DE'
            },
            imageUrl: 'http://angularjs.org/img/AngularJS-large.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'John Doe',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'Here is some random text: dfadsgfasdfasdfadsfasdfasdfasdf',
                    upVoteCount: 30
                },
                {
                    name: 'Scopes for fun and profits',
                    creatorName: 'Jane Doe',
                    duration: 2,
                    level: 'Beginner',
                    abstract: 'Here is some random text: ewqretqwtqrewtqwrtrttwrtettere',
                    upVoteCount: 20
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'John Smith',
                    duration: 4,
                    level: 'Intoductory',
                    abstract: 'Here is some random text: zbzczxcbzvxcbzxvccxbzxbvczxbvc',
                    upVoteCount: 10
                }
            ]
        };

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    });