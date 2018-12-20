const {counterModel} = require('../../app/db/models')
const sinon = require('sinon')
require('sinon-mongoose')

let counterModelMock = sinon.stub(counterModel)

counterModelMock.expects('getNextSeqValue')
    .withArgs("staffId")
    .returns(3)
    .withArgs("gradeId").returns(4)

module.exports = counterModelMock

