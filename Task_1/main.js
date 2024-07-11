// To run ll scenarios run this main.js file
// To run ---> k6 run TOKEN:<add_your_github_token_here> -e USERNAME:<add_your_github_usernme_here> main.js
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import { group } from 'k6';
import { userAuthwithDataValidation } from "./tests/userAuthWithDataValidation.js";
import { userUnauthorization, verifyMissingFieldRequest, verifyInvalidEndpointRequest, verifyInvalidFeildRequest } from "./tests/errorHandling.js";
import { verifyGetRepositories } from "./tests/multiUser.js"

export const options = {
    scenarios: {
        scenario1: {
            exec: "userAuthAndValidateData",  // name of the function to execute for this scenario
            executor: "per-vu-iterations",    // determines the behaviour of VUs
            startTime: '0s',                  // scenario execution start time
            vus: 1,                           // number of users/threads to maintain throughoutthe test
            iterations: 1,                    // number of iteration(requests) per VU
            maxDuration: '300s',              // maximum duration of the test scenario
        },
        scenario2: {
            exec: "negativeScenarios",
            executor: "per-vu-iterations",
            startTime: '5s',
            vus: 1,
            iterations: 1,
            maxDuration: '300s',  
        },
        scenario3: {
            exec: "multiVUsers",
            executor: "ramping-vus",           // use ramping-vus executor for ramp-up, ramp-down and steady-state
            startTime: '5s',
            stages:[
                {duration:'5s', target: 10},    // ramp-up to 10 users over 5s
                {duration:'5s', target: 10},    // stay at 10 users for 5s
                {duration:'5s', target: 0}      // ramp-down to 0 users over 5s
            ],
            startVUs: 0,                        // starts with 0 virtual user
            gracefulRampDown: '0s',             // time to gracefully ramp down to 0 VUs at the end
        },
    },
}

export function userAuthAndValidateData() {
    group('scenario 1: Check Github User Authentication And Data Validation', function () {
        userAuthwithDataValidation();
    })
}

export function negativeScenarios() {
    group('scenario 2: Check Different Error Input Handlings For Github API', function () {
        userUnauthorization();
        verifyMissingFieldRequest();
        verifyInvalidEndpointRequest();
        verifyInvalidFeildRequest();
    })
}

export function multiVUsers() {
    group('scenario 3: Check For Multiple User Performance For Github API', function () {
        verifyGetRepositories();
    })
}

export function handleSummary(data) {
    console.log("report generation")
    return {
        stdout: textSummary(data, { indent: " ", enableColors: true }),
        "result.html": htmlReport(data),
    };
}
