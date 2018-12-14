const availableStaffs = [
    {
        "name": {
            "firstName": "Kutti",
            "middleName": "V",
            "lastName": "Raja"
        },
        "address": {
            "city": "Bentonville",
            "zipCode": 72713
        },
        "lastUpdateTS": "2018-12-11T05:39:49.545Z",
        "createTS": "2018-12-11T05:39:49.545Z",
        "dob": "2019-12-12T06:00:00.000Z",
        "email": "kutti@gmail.com",
        "gender": "M",
        "staffId": 2,
    },
    {
        "name": {
            "firstName": "John",
            "middleName": "",
            "lastName": "Does"
        },
        "address": {
            "city": "Bentonville",
            "zipCode": 72713
        },
        "lastUpdateTS": "2018-12-11T05:58:04.992Z",
        "createTS": "2018-12-11T05:58:04.992Z",
        "dob": "2019-12-12T06:00:00.000Z",
        "email": "john@gmail.com",
        "gender": "M",
        "staffId": 2
    }

];

const newStaffDetails =
{
    "name": {
        "firstName": "Kutti",
        "middleName": "V",
        "lastName": "Raja"
    },
    "address": {
        "city": "Bentonville",
        "zipCode": 72713
    },
    "lastUpdateTS": "2018-12-11T05:39:49.545Z",
    "createTS": "2018-12-11T05:39:49.545Z",
    "dob": "2019-12-12T06:00:00.000Z",
    "email": "kutti@gmail.com",
    "gender": "M"
};

const newStaffDB =
{
    "name": {
        "firstName": "Kutti",
        "middleName": "V",
        "lastName": "Raja"
    },
    "address": {
        "city": "Bentonville",
        "zipCode": 72713
    },
    "lastUpdateTS": "2018-12-11T05:39:49.545Z",
    "createTS": "2018-12-11T05:39:49.545Z",
    "dob": "2019-12-12T06:00:00.000Z",
    "email": "kutti@gmail.com",
    "_id": "5c0f521036983d5cbc3f16e2",
    "gender": "M",
    "staffId": 3
};


module.exports = {
    availableStaffs,
    newStaffDetails,
    newStaffDB
}