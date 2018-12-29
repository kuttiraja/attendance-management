const availableGrades = [
    {
        "gradeName": "First Grade",
        "maxStrength" : 10,
        "gradeSection" : "A"
    },
    {
        "gradeName" : "Second Grade",
        "maxStrength" : 20,
        "gradeSection": "B"
    }
]

const newGrade = {
    "gradeName" : "Third Grade",
    "maxStrength" : 20,
    "gradeSection" : "A"
}

const newGradeDB = {
    "gradeName" : "Third Grade",
    "maxStrength" : 20,
    "_id": "5c0f521036983d5cbc3f16e2",
    "lastUpdateTS": "2018-12-11T05:39:49.545Z",
    "createTS": "2018-12-11T05:39:49.545Z",
    "gradeId" : 1,
    "gradeSection": "A"
}

const gradeDatabyId = {
    "gradeName" : "Third Grade",
    "maxStrength" : 20,
    "_id": "5c0f521036983d5cbc3f16e2",
    "lastUpdateTS": "2018-12-11T05:39:49.545Z",
    "createTS": "2018-12-11T05:39:49.545Z",
    "gradeId" : 1,
    "gradeSection": "A"
}

module.exports = {
    availableGrades,
    newGrade,
    newGradeDB,
    gradeDatabyId
}