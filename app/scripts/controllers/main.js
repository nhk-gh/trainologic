'use strict';

/**
 * @ngdoc function
 * @name trainologicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainologicApp
 */
angular.module('trainologicApp')
  .controller('MainCtrl', function ($scope) {
    $scope.contacts = [
      {
        id:1,
        name: 'Friends',
        type: 'Group',
        collapsed: true,
        contacts: [
          {id:2, name: 'Udi', type: 'Contact'},
          {id:3, name: 'Tommy', type: 'Contact'},
          {
            id:6,
            name: 'Old Friends',
            type: 'Group',
            collapsed: true,
            contacts: [
              {id:7, name: 'Itay', type: 'Contact'},
            ]
          }
        ]
      },
      {
        id:4,
        name: 'Family',
        type: 'Group',
        collapsed: true,
        contacts: [
          {id:5, name: 'Roni', type: 'Contact'},
        ]
      },
      {id: 8, name: 'Ori', type: 'Contact'},
    ];

    $scope.toggleContacts = function(ind) {
      $scope.contacts[ind].collapsed = !$scope.contacts[ind].collapsed;
    }
  });
