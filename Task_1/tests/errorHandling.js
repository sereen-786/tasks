import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import http from 'k6/http';
import { check, group } from 'k6';
import { BASE_URL, AUTHHEADERS, INVALID_TOKEN } from '../common/const.js'

/**
 * Verifies the github unauthorized access with invalid token shpuld give 
 * response as 401 Unathorized.
 */
export function userUnauthorization() {
    group('Verify the github unauthorized access - Invalid token', function () {
        let invalidTokenHeaders = {
            headers: {
                'Authorization': `Bearer ${INVALID_TOKEN}`,
                'Content-Type': 'application/json',
            }
        }
        let res = http.get(`${BASE_URL}/user`, invalidTokenHeaders);
        check(res, {
            'Expected unauthorized status is 401 for unauthorized access': (r) => {
                if (r.status === 401) {
                    console.log('Unauthorized access: Correctly returned 401 status');
                    return true;
                } else {
                    console.error(`Unauthorized access: Unexpected status code ${r.status}`);
                    return false;
                }
            },
            'Expected response contains "Bad credentials" for unauthorized access': (r) => {
                if (r.json().message === 'Bad credentials') {
                    console.log('Unauthorized access: Correctly returned "Bad Credentials" meesage');
                    return true;
                } else {
                    console.error(`Unauthorized access: Unexpected response message ${JSON.stringify(r)}`);
                    return false;
                }
            }
                
        });
    })
}

/**
 * Verifies github repo creation is made with empty/missing input fields and
 * expected response should be 422 validation failed.
 */
export function verifyMissingFieldRequest() {
    group('Verify github post request for creation of repo with empty/missing input fields', function () {
        let missingPayload = JSON.stringify({
            name: "",
            description: ""
        });

        let res = http.post(`${BASE_URL}/user/repos`, missingPayload, AUTHHEADERS);
        check(res, {
            'Expected 422 for missing input field payload': (r) => {
                if (r.status === 422) {
                    console.log('Missing Field: Expected response 422 is received');
                    return true;
                } else {
                    console.error(`Missing Field: Unexpected status code ${r.status}`);
                    return false;
                }
            },
            'Expected response contains "Missing feild" missing input field payload': (r) => {
                if (r.json().errors[0].code === 'missing_field') {
                    console.log('Missing Field: Correctly returned "Missing feild" response');
                    return true;
                } else {
                    console.error(`Missing Field: Unexpected response message ${JSON.stringify(r)}`);
                    return false;
                }
            }
        });
    });
}

/**
 * Verifies when post is done on github user repo creation with invalid/Unsupported payload
 * should expect response as 400 Bad Request.
 */
export function verifyInvalidFeildRequest() {
    group('Verify github repo creation with invalid/Unsupported payload', function () {

        let invalidPayload = '<repo><name>newrepo</repo><description>repo</description><repo>';

        let res = http.post(`${BASE_URL}/user/repos`, invalidPayload, AUTHHEADERS);
        check(res, {
            'Expected 400 for invalid payload': (r) => {
                if (r.status === 400) {
                    console.log('Invalid Field: Expected response 400 is received');
                    return true;
                } else {
                    console.error(`Invalid Field: Unexpected status code ${r.status}`);
                    return false;
                }
            },
            'Expected response contains "Bad Request" for invalid payload': (r) => {
                if (r.json().message === 'Problems parsing JSON') {
                    
                    console.log('Invalid Field: Correctly returned "Bad Request" and json error message');
                    return true;
                } else {
                    console.error(`Invalid Field: Unexpected response message ${JSON.stringify(r)}`);
                    return false;
                }
            }
        });
    });
}

/**
 * Verifies when invalid endpoint is passed with github api response expected is
 * 404 Not Found.
 */
export function verifyInvalidEndpointRequest() {
    group('Verify invalid endpoint response for github api', function () {

        let res = http.get(`${BASE_URL}/invalid_endpoint`, AUTHHEADERS);
        check(res, {
            'Expected 404 Not Found when accessing invalid path "/invalid_endpoint"': (r) => {
                if (r.status === 404) {
                    console.log('Invalid endpoint: Expected response 404 is received');
                    return true;
                } else {
                    console.error(`Invalid endpoint: Unexpected status code ${r.status}`);
                    return false;
                }
            },
            'Expected response contains "Not Found" for invalid endpoint': (r) => {
                if (r.json().message === 'Not Found') {
                    console.log('Invalid endpoint: Correctly returned "Not Found" meesage');
                    return true;
                } else {
                    console.error(`Invalid endpoint: Unexpected response message ${JSON.stringify(r)}`);
                    return false;
                }
            }
        });
    });
}

// If alone this file want to be executed then this default function is required
// To run ---> k6 run -e TOKEN:<add_your_github_token_here> -e USERNAME:<add_your_github_usernme_here> errorHandling.js
export default function() {
    userUnauthorization();
    verifyInvalidEndpointRequest();
    verifyInvalidFeildRequest();
    verifyMissingFieldRequest();
}

export function handleSummary(data) {
    console.log("report generation")
    return {
        "result.html": htmlReport(data),
        stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
}