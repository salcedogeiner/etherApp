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

    var Web3 = require('web3')
    var web3 = new Web3(new Web3.providers.HttpProvider("http://ritaportal.udistrital.edu.co:10141"));
    var contract_abidefinition ='[{"constant": false,"inputs": [{"name": "doc","type": "bytes32[]"}],"name": "setDocument","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "x","type": "bytes32"}],"name": "bytes32ToString","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "countDocuments","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "documentAccts","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "_address","type": "string"}],"name": "getDocument","outputs": [{"name": "","type": "string"},{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getDocuments","outputs": [{"name": "","type": "string[]"}],"payable": false,"stateMutability": "view","type": "function"}]';
    var  abiDefinition= JSON.parse(contract_abidefinition);
    var    contract = web3.eth.contract(abiDefinition);
    var    instance = contract.at("0x0e735ddca97006a37974c9d7c2cc52422002bc02");
    console.log(instance);
    var account=web3.eth.coinbase;
    var password="password"
    web3.personal.unlockAccount(account,password);

    return {
      get_doc: function(doc) {
        var docs=instance.getDocument.call(doc);
        return docs;
      },
      set_doc: function(doc){
        var some = [web3.toUtf8(doc[0]),web3.toUtf8(doc[1])];

        console.log(some);
        var txnObject = {
          from: web3.eth.coinbase,
          gas: 910000
        }
        instance.setDocument.sendTransaction(doc, txnObject);
        return "ok";
      },
      count: function () {
        return instance.countDocuments.call();
      }
    }
  });
