'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {
        $scope.saveEvent = function(event, newEventForm) {
            if (newEventForm.$valid) {
                window.alert('you saved event: ' + event.name + '!');
            }
        };

        $scope.cancelEvent = function() {
            window.location = '/app/EventDetails.html';
        };
});