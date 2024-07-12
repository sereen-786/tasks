import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import http from 'k6/http';
import { check, fail, group } from 'k6';
import { BASE_URL, AUTHHEADERS, USERNAME } from '../common/const.js';

/**
 * verifies the user authentication and creates a repo to validate data (owner, status, repo name, description)
 * and to delete successfully created repo.
 */
export function userAuthwithDataValidation () {
    group('Verify the github user authentication with data validation', function () {

        let res = http.get(`${BASE_URL}/user`, AUTHHEADERS)
        if (!check(res, {
            'Authentication status is 200': (r) => r.status === 200,
            [`Authenticated user name correct (login: ${USERNAME})`]: (r) => r.json().login === USERNAME,
        })) {
            //  The whole k6 execution is halted here if authentication fails
            fail(`Failed to authenticate user or incorrect username returned with response status code ${res.status} and body\n ${JSON.stringify(res)}`);
        } else {
            console.log(`Authentication to github api is successful`);
        }

        let payload = JSON.stringify({
            name: 'test-repo',
            description: 'This is a test repository',
            private: false,
        });
        
        // Creation of repository
        res = http.post(`${BASE_URL}/user/repos`, payload, AUTHHEADERS);
        if (!check(res, {
            'Create repo status is 201': (r) => r.status === 201,
            'Repo name created is correct (name: test-repo)': (r) => r.json().name === 'test-repo',
            'Repo description is correct': (r) => r.json().description === 'This is a test repository',
        })) {
            console.error(`Failed to create repository or return wrong data with response status code ${res.status} and body\n ${JSON.stringify(res)}`);
        } else {
            console.log("Creation of the user github repo is successfull with response data validated");
        }
        
        // If creation of repo is success then the deletion of repo is done here
        if (res.status === 201) {
            let repoName = res.json().name;
            res = http.del(`${BASE_URL}/repos/${USERNAME}/${repoName}`, null, AUTHHEADERS);

            if (!check(res, {
                'Delete created repo status is 204': (r) => r.status === 204,
            })) {
                console.error(`Failed to delete repository with response status code ${res.status} and body\n ${JSON.stringify(res)}`);
            } else {
                console.log(`Deleting of github user repo is successful`);
            }
        } else {
            console.error(`Repository was not created, so it cannot be deleted`);
        }
    })
}

// If alone this file want to be executed then this default function is required
// To run ---> k6 run -e TOKEN:<add_your_github_token_here> -e USERNAME:<add_your_github_usernme_here> userAuthWithDataValidation.js
export default function() {
    userAuthwithDataValidation();
}

export function handleSummary(data) {
    console.log("report generation")
    return {
        stdout: textSummary(data, { indent: " ", enableColors: true }),
        "result.html": htmlReport(data),
    };
}
