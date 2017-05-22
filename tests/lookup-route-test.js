var chai = require('chai');
var expect = chai.expect;
var lookupRoute = require('../routes/lookup');
var sinon = require('sinon');
var express = require('express');
var request = require('supertest');

var googleCivics = require('../lib/clients/google-civics');
var EXPECTATIONS = require('./fixtures/expectations');
var REPS_RESPONSE = require('./fixtures/representatives');

var expecting = {
  normalizedInput: REPS_RESPONSE.normalizedInput,
  reps: EXPECTATIONS.reps,
  districts: EXPECTATIONS.districts
};

var googleStub;

var app = express();
app.use('/lookup', lookupRoute);

describe('lookup route', function () {
  const ADDRESS = "123 Main St, Anytown, OH";
  
  beforeEach(function () {
    googleStub = sinon.stub(googleCivics, 'getReps', () => Promise.resolve(REPS_RESPONSE));
  });
  afterEach(function() {
    googleCivics.getReps.restore();
  });
  
  it('should return merged objects from the google API', function (done) {
    
    request(app)
      .get(`/lookup/?address=${ADDRESS}`)
      .expect(function () {
        expect(googleStub.calledWith(ADDRESS)).to.be.ok; // jshint ignore:line
      })
      .expect(200, expecting, done);
  });
});
