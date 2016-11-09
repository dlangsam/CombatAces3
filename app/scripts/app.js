'use strict';

/**
 * @ngdoc overview
 * @name combatAcesApp
 * @description
 * # combatAcesApp
 *
 * Main module of the application.
 */
angular
  .module('combatAcesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'combat-movies'
  ]);
  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainController',
  //       controllerAs: 'mainCtrl'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl',
  //       controllerAs: 'about'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });
