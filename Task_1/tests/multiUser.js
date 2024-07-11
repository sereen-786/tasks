import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import http from 'k6/http';
import { check } from 'k6';
import { BASE_URL, AUTHHEADERS, USERNAME } from '../common/const.js';

/**
 * verifies the user to get the repos from github api is successful.
 */
export function verifyGetRepositories() {

    let res = http.get(`${BASE_URL}/users/${USERNAME}/repos`, AUTHHEADERS);
    check(res, {
        'Fetch repositories status is 200': (r) => {
            if (r.status === 200) {
                return true;
            } else {
                console.error(`Multiple User: Unexpected status code ${r.status}`);
                return false;
            }
        },
    });
}

// If alone this file want to be executed then this default function is required
// To run --> k6 run TOKEN:<add_your_github_token_here> -e USERNAME:<add_your_github_usernme_here> multiUser.js
export default function () {
    verifyGetRepositories();
}

export function handleSummary(data) {
    console.log("report generation")
    return {
        "result.html": htmlReport(data),
        stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
}