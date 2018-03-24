'use strict';

/**
 * @ngdoc function
 * @name etherAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the etherAppApp
 */
angular.module('etherAppApp')
  .controller('MainCtrl', function ($scope,web3service) {
    $scope.fileContent="";
    $scope.data=[];
    $scope.transformData=function(){
      $scope.data=$scope.fileContent.split("\n");
      angular.forEach($scope.data, function(value,key){
        $scope.data[key]=value.split(",");
      });
    };

    $scope.subirRegistro=function(raw){
      web3service.get();
      console.log(raw);
    };



    $scope.$watch('fileContent', function(){
      $scope.transformData();
    },true);

  });
