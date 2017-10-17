'use strict';

/**
 * @ngdoc overview
 * @name trainologicApp
 * @description
 * # trainologicApp
 *
 * Main module of the application.
 */
angular
  .module('trainologicApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });