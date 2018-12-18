const {staffModel , counterModel} = require('../../app/db/models')

const sinon = require('sinon')
require('sinon-mongoose')

const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
const { server } = require('../../app/server')
const world = require('../support/world');
chai.use(chaiHttp);
const { Given, When, Then } = require('cucumber');
// const { availableStaffs, newStaffDetails, newStaffDB } = require('../dummy-data');
const {staffData} = require('../dummy-data')
let staffModelMock, counterModelMock;

Given('staff details', function () {
    staffModelMock = sinon.mock(staffModel)
    counterModelMock = sinon.mock(counterModel)
})

When('I request system to add new staff', function (callback) {
    var expectedResult = staffData.newStaffDB;
    counterModelMock
        .expects('getNextSeqValue')
        .resolves(3)
    staffModelMock
        .expects('create')
        .resolves(expectedResult);

    chai.request(server)
        .post('/attendancemgmt/staff/')
        .set('content-type', 'application/json')
        .send(staffData.newStaffDetails)
        .then(resolve => {
            this.setResponse(resolve)
            callback()
        })
        .catch(reject => {
            callback(reject)
        })
})

When('I request system to show all staffs', function (callback) {
    var expectedResults = staffData.availableStaffs
    staffModelMock
        .expects('find')
        .chain('limit')
        .resolves(expectedResults)

    chai.request(server)
        .get('/attendancemgmt/staff?page_size=1')
        .then(resolve => {
            this.setResponse(resolve)
            callback()
        })
        .catch(reject => {
            callback(reject)
        })
})

Then('it should add new staff and return me staffId', function (done) {
    const response = this.getResponse()
    expect(response.statusCode).to.be.equal(201)
    expect(response.body).deep.equal(staffData.newStaffDB)
    done()
})

Then('it should retreive all staffs in the system', function (done) {
    const response = this.getResponse()
    expect(response.statusCode).to.be.equal(200)
    expect(response.body.length).to.be.greaterThan(0)
    done()
})