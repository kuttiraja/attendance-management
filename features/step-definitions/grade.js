const {gradeModel , counterModel} = require('../../app/db/models')

const sinon = require('sinon')
require('sinon-mongoose')
const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http')
const { server } = require('../../app/server')
const world = require('../support/world')
chai.use(chaiHttp);
const { Given, When, Then, Before, After } = require('cucumber')
const { gradeData } = require('../dummy-data')
let gradeModelMock, counterModelMock;

let  x

Before(() => {
    x = sinon.createSandbox();
    counterModelMock = x.mock(counterModel) 
    
    gradeModelMock = x.mock(gradeModel)

    counterModelMock
        .expects('getNextSeqValue')
        .resolves(3)
    var expectedResult = gradeData.newGradeDB;
    gradeModelMock
        .expects('create')
        .resolves(expectedResult);

})

After(() => {
    x.reset()
})

Given('grade details', function () {
    
})

When('I request system to add new grade', function (callback) {
    var expectedResult = gradeData.newGradeDB;
   

    chai.request(server)
        .post('/attendancemgmt/grade/')
        .set('content-type', 'application/json')
        .send(gradeData.newGrade)
        .then(resolve => {
            this.setResponse(resolve)
            callback()
        })
        .catch(reject => {
            callback(reject)
        })
})

When('I request system to show all grades', function (callback) {
    var expectedResults = gradeData.availableGrades
    gradeModelMock
        .expects('find')
        .chain('skip')
        .chain('limit')
        .resolves(expectedResults)

    chai.request(server)
        .get('/attendancemgmt/grade?page_size=1')
        .then(resolve => {
            this.setResponse(resolve)
            callback()
        })
        .catch(reject => {
            callback(reject)
        })
})

Then('it should add new grade and return me gradeId', function (done) {
    const response = this.getResponse()
    expect(response.statusCode).to.be.equal(201)
    expect(response.body).deep.equal(gradeData.newGradeDB)
    done()
})

Then('it should retreive all grades in the system', function (done) {
    const response = this.getResponse()
    expect(response.statusCode).to.be.equal(200)
    expect(response.body.length).to.be.greaterThan(0)
    done()
})