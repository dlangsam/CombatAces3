'use strict';

/**
 * @ngdoc function
 * @name combatAcesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the combatAcesApp
 */
angular.module('combatAcesApp')
  .controller('MainController', ['$http', function($http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var main = this;
    main.quotes = [];
   	main.movies = []; //init page to empty to array so no error before page loads
    $http.get('../../data.json').success(function(data){
      main.movies = data.movies;
      main.quotes = data.quotes;
      main.quote = main.getQuote(); 
    });
    
     

      main.getQuote = function(){
       var numQuotes = this.quotes.length;
          var rand = Math.floor((Math.random()*numQuotes));
        return this.quotes[rand];

      };



  }])
  .filter('isAccurate', function () {
    return function (items, level) {
      var filtered = []
      var min, max; 
      if(level === 3){
        min = 7;
        max = 10; 
      }else if(level === 2){
        min = 4;
        max = 7;
      }else if(level === 1){
        min = 1;
        max = 4;
      }else{
        min = 0;
        max = 1; 
      }
      angular.forEach(items, function(item){
          if(item.accuracy > min && item.accuracy <= max){
            filtered.push(item)
          }
      });
    return filtered;
   };
  });