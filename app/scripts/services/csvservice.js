'use strict';

/**
 * @ngdoc service
 * @name etherAppApp.web3service
 * @description
 * # web3service
 * Service in the etherAppApp.
 */
angular.module('etherAppApp')
  .service('csvService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var path = ""

    return {
      get: function() {
        return $http.get(path)
      }
    }
  });
