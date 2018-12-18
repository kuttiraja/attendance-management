Feature: Staff Maintenance
    In order to do staff administration
    As an Admin , 
    I should be able to add, delete, update staffs

    Scenario: Add new staff to system
        Given staff details
        When I request system to add new staff
        Then it should add new staff and return me staffId
    Scenario: Retrieve all staffs in the system
        Given staff details
        When I request system to show all staffs
        Then it should retreive all staffs in the system
    