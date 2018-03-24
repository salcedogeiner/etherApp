'use strict';

describe('Service: web3service', function () {

  // load the service's module
  beforeEach(module('etherAppApp'));

  // instantiate service
  var web3service;
  beforeEach(inject(function (_web3service_) {
    web3service = _web3service_;
  }));

  it('should do something', function () {
    expect(!!web3service).toBe(true);
  });

});
