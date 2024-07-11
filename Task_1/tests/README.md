# API Automated Test Documentation
This repository contains automated test cases for the github API using K6 performance tool.

## Tools and Framework
- Testing Framework - k6 (JavaScript)

## Test Scenarios And Test Cases

### Scenario 1: To Check Github User Authentication And Data Validation (positive scenarios)

- _Test Case ID_ : 1.1
- _Description_ : Automate the github user authentication with valid token to create the repo for user data validation and then delete the repo created.
- _Pre - Condition_ : Have a valid username and token generated from your github account.
- _Test steps_:
  - Validate the user authentication with token.
  - Create a new repo and verify the data (e.g, user_name, description, repo_name)
  - Validate the created repo is deleted.
- _Test script path_ : tasks/Task_1/tests/userAuthWithDataValidation.js
- _Expected results_ :
  - status code is '200' OK
  - Repo is created with '201' details (e.g, user_name, description, repo_name)
  - Delete is success '204'
- _Automation results_ : PASS
  ```bash
   █ scenario 1: Check Github User Authentication And Data Validation

    █ Verify the github user authentication with data validation

      ✓ Authentication status is 200
      ✓ Authenticated user name correct (login: Rithik-codes)
      ✓ Create repo status is 201
      ✓ Repo name created is correct (name: test-repo)
      ✓ Repo description is correct
      ✓ Delete created repo status is 204
  ```

### Scenario 2: Check Different Error Input Handlings For Github API (negative scenarios)

- _Test Case ID_ : 2.1
- _Description_ : Automate to verify the github unauthorized access when valid user and invalid token is provided.
- _Pre - Condition_ : Be a user in github
- _Test steps_ :
  - Send invalid token as some random string
  - Check the response to be '401' with message body 'unauthorized'
- _Test script path_ : tasks/Task_1/tests/errorHandling.js
- _Expected results_ :
  - status code '401' unathorized
- _Automation results_ : PASS
  ```bash
  █ scenario 2: Check Different Error Input Handlings For Github API

    █ Verify the github unauthorized access - Invalid token

      ✓ Expected unauthorized status is 401 for unauthorized access
      ✓ Expected response contains "Bad credentials" for unauthorized access
  ```

- _Test Case ID_ : 2.2
- _Description_ : Automate to verify github post request for creation of repo with empty/missing input fields with valid user.
- _Pre - Condition_ : Have a valid username and token generated from your github account.
- _Test steps_ :
  - Send missing imput payload in request e.g, { name: "", description: "" )
  - Check the response to be '422' with message body 'missing fields'
- _Test script path_ : tasks/Task_1/tests/errorHandling.js
- _Expected results_ :
  - status code '422 Validation failed'
- _Automation results_ : PASS
  ```bash
  █ scenario 2: Check Different Error Input Handlings For Github API
  
    █ Verify github post request for creation of repo with empty/missing input fields

      ✓ Expected 422 for missing input field payload
      ✓ Expected response contains "Missing feild" missing input field payload
  ```

- _Test Case ID_ : 2.3
- _Description_ : Automate to verify invalid endpoint response for github api with valid user.
- _Pre - Condition_ : Have a valid username and token generated from your github account.
- _Test steps_ :
  - Send invalid endpoint with github base url e.g, https://api.github.com/invalid_endpoint
  - Check the response to be error as '404' with body 'Not Found''
- _Test script path_ : tasks/Task_1/tests/errorHandling.js
- _Expected results_ :
  - status code '404 Not Found'
- _Automation results_ : PASS
  ```bash
  █ scenario 2: Check Different Error Input Handlings For Github API
  
     █ Verify invalid endpoint response for github api

      ✓ Expected 404 Not Found when accessing invalid path "/invalid_endpoint"
      ✓ Expected response contains "Not Found" for invalid endpoint 
  ```

- _Test Case ID_ : 2.4
- _Description_ : Automate to verify github repo creation with invalid/Unsupported payload wih valid user.
- _Pre - Condition_ : Have a valid username and token generated from your github account.
- _Test steps_ :
  - Send request payload with a different format e.g, xml
  - Check the response to be error as '400' and message 'Bad request'
- _Test script path_ : tasks/Task_1/tests/errorHandling.js
- _Expected results_ :
  - status code '400 Bad Request'
- _Automation results_ : PASS
  ```bash
  █ scenario 2: Check Different Error Input Handlings For Github API

    █ Verify github repo creation with invalid/Unsupported payload

      ✓ Expected 400 for invalid payload
      ✓ Expected response contains "Bad Request" for invalid payload
  ```

### Scenario 3: Check For Multiple User Performance For Github API (load testing)

- _Test Case ID_ : 2.1
- _Description_ : Automate to verify load testing when a certain users hit the get list of user repo requests simultaneously with ramp-up, steady and ramp down.
- _Pre - Condition_ : Have a valid username and token generated from your github account.
- _Test steps_ :
  - Set some ramp-up of gradually increasing to 10 users for 5s, then stay at 10 users for 5s and ramp-down to 0 users over 5s.
  - Check the response to be 200
- _Test script path_ : tasks/Task_1/tests/multiUser.js
- _Expected results_ :
  - status code '200' OK
  - check the multiple user requests is success
- _Automation results_ : PASS
  ```bash
   █ scenario 3: Check For Multiple User Performance For Github API

    ✓ Fetch repositories for valid user status is 200  
  ```
  
