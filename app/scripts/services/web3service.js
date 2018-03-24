'use strict';

/**
 * @ngdoc service
 * @name etherAppApp.web3service
 * @description
 * # web3service
 * Service in the etherAppApp.
 */
angular.module('etherAppApp')
  .service('web3service', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

  var Web3 = require('web3');
  var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

    return {
      get: function() {
        web3.eth.getAccounts((err, accounts) => {
          if (err != null) {
            console.log("There was an error fetching your accounts.");
            return;
          }

          if (accounts.length == 0) {
            console.log("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
            return;
          }
          return accounts;
        });
      }
    }
  });
