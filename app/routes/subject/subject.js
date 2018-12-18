const subject = require('./subject-queries')
const { logger, config } = require('../../core')

async function getAllSubjects(req, res, next) {
    let result = [];
    const { page_size, page_num = 1 } = req.query
    
    try {
        result = await subject.getAllSubjects(page_size, page_num)
        logger.info(`subject.getAllSubject()- returns [${result.length}] subject details`)
    } catch (err) {
        logger.error(`subject.getAllSubject()- error ${err}`)
    }

    res.send(result)
}

async function addSubject(req, res, next) {  
    let result = [];
    const { subjectName, maxStrength, subjectSection  } = req.body
    try {
        const newSubject = {
            subjectName,
            subjectSection,
            maxStrength
        }

        result = await subject.addSubject(newSubject)
        logger.info(`subject.addSubject()- returns [${result.subjectId}] subject details`)
    } catch (err) {
        logger.error(`subject.addSubject()- error ${err}`)
    }
    if (result.subjectId)
        res.status(201).send('Insert Success')
    else
        res.status(409).send('Error in processing request')
}

async function getSubjectById(req, res, next) {
    let result = [];
    try {
        result = await subject.getSubjectById(req.params.subjectId)
        logger.info(`subject.getSubjectById()- returns [${result.length}] subject details`)
    } catch (err) {
        logger.error(`subject.getSubjectById()- error ${err}`)
    }

    res.send(result)
}


module.exports = { 
    getAllSubjects,
    addSubject,
    getSubjectById
}
