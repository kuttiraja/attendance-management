const {server} = require('../../app/server')
const request = require('supertest')
const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
require('sinon-mongoose')

const {gradeModel , counterModel} = require('../../app/db/models')
//mock
let gradeModelMock, counterModelMock;

//mock-data
const  gradeData  = require('../data/grade-data')
const req = request(server)

let  sandbox
before(()=>{
    sandbox = sinon.createSandbox()
    gradeModelMock = sinon.mock(gradeModel)
    counterModelMock =sinon.mock(counterModel)

    
    counterModelMock
        .expects('getNextSeqValue').withArgs("gradeId")
        .resolves(1)

var expectedResults = gradeData.gradeDatabyId
     gradeModelMock
            .expects('find')   
            .resolves(expectedResults)

var expectedResultall = gradeData.availableGrades
    gradeModelMock
        .expects('find')
        .chain('skip')
        .chain('limit')
        .resolves(expectedResultall)

var expectedResultAdd = gradeData.newGradeDB
    gradeModelMock
        .expects('create')
        .resolves(expectedResultAdd)

})

after(() => {
    sandbox.reset()

})

describe('grade Testing', () => {
    it('Get a grade details', (done) => {
        req
        .get('/attendancemgmt/grade/1')
        .end((req, res) => {
            expect(res.statusCode).to.equal(200)
            expect(res.body.gradeId).to.equal(1)
            done()
        })
    })

    it('Get all grade details', (done) => {   
        req
        .get('/attendancemgmt/grade')
        .query({page_size : 2})
        .end((req, res) => {
            expect(res.statusCode).to.equal(200)
            expect(res.body.length).to.equal(2)
            done()
        })
    })

    it('Add a grade', (done) => {   
        req
        .post('/attendancemgmt/grade')
        .send(gradeData.newGrade)
        .end((req, res) => {
            expect(res.statusCode).to.equal(201)
            expect(res.body.gradeId).to.equal(1)
            done()
        })
    })
})