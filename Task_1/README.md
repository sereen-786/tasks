# Task 1: API Automation

## Contents

1. About Task
2. About K6 automation tool
3. Download pretrained weights and file structure
4. Github account and token creation -- needed for running test cases
5. Installation of k6 for execution of test cases
6. Execution steps


## 1. About Task

Select any publicly available API  GitHub API, identify and
automate three critical scenarios. Provide documentation for each of the automated
scenario.

## 2. About K6 automation tool
Grafana k6 is an open-source load testing tool that makes performance testing easy and productive for engineering teams. k6 is free, developer-centric, and extensible.
Using k6, you can test the reliability and performance of your systems and catch performance regressions and problems earlier. k6 will help you to build resilient and performant applications that scale.

Key features include:
- CLI tool with developer-friendly APIs.
- Scripting in JavaScript ES2015/ES6 - with support for local and remote modules
- Checks and Thresholds - for goal-oriented, automation-friendly load testing

for more info please check their office website [K6 official](https://k6.io/docs/)

## 3. Download pretrained weights

```bash
# you may need to have git install first
git clone https://github.com/sereen-786/tasks.git
```

Or, download all pretrained weights from [tasks repo download](https://github.com/sereen-786/tasks/archive/refs/heads/main.zip)
```text
tasks
└── Task_1
    ├── common                                  --> common folder to add common variables or functions
    │   └── const.js                            --> contains all the common constants
    ├── tests                                   --> test folder
    │   ├── errorHandling.js                    --> scenario - for different error input requests 
    │   ├── multiUser.js                        --> scenario - for running multiple threads
    │   └── userAuthWithDataValidation.js       --> scenario - for user authentication with token and response data validation
    └── main.js                                 --> file contains all the scenarios added to run in one file -- <k6 run main.js>
```

## 4. Github account and token creation -- if doesnot exist
1. To run these test/pass them or to access github api's you need to have a github account with - USERNAME and TOKEN
2. Creation of account you can check link and proceed with the account creation [Github account creation](https://docs.github.com/en/get-started/onboarding/getting-started-with-your-github-account)
3. If account is already present then skip the above 2 steps.
4. Now generate the TOKEN to authenticate using github api required for running test case.
5. Check the steps here to generate TOKEN [Generate github token](https://docs.github.com/en/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
   ![image](https://github.com/sereen-786/tasks/assets/82365795/f3238845-2fdd-46f6-8f68-21706b111e45)
6. **Finally copy USERNAME and the generated TOKEN and use it while running test cases**

## 5. Installation of K6 tool

1. On Windows

- If you use the Windows Package Manager, install the official packages from the k6 manifests (created by the community):
  ```bash
  winget install k6 --source winget
  ```
- If you use the Chocolatey package manager you can install the unofficial k6 package with:
  ```bash
  choco install k6
  ```
- Alternatively, you can download and run the [latest official installer](https://dl.k6.io/msi/k6-latest-amd64.msi).

2. Similarlly, check for mac and linux installation here [Mac and Linux installation here](https://k6.io/docs/get-started/installation/#linux)

3. Check on git bash or cmd prompt if the k6 is installed successfully
   ```bash
   rithi@Workstation MINGW64 ~/dummy_test
   $ k6 --version
   k6.exe v0.52.0 (commit/20f8febb5b, go1.22.4, windows/amd64)
   ```
   
## 6. Execution steps
1. Open the git bash or cmd prompt

2. Create a folder and clone the repo or download the repo
   ```bash
   rithi@Workstation MINGW64 ~/dummy_test
   $ git clone https://github.com/sereen-786/tasks.git
   Cloning into 'tasks'...
   remote: Enumerating objects: 107, done.
   remote: Counting objects: 100% (107/107), done.
   remote: Compressing objects: 100% (85/85), done.
   remote: Total 107 (delta 35), reused 11 (delta 0), pack-reused 0
   Receiving objects: 100% (107/107), 119.31 KiB | 744.00 KiB/s, done.
   Resolving deltas: 100% (35/35), done.
   ```
3. Check if the directory is present
   ```bash
   rithi@Workstation MINGW64 ~/dummy_test
   $ ls
   tasks/
   ```
4. Go into the Tast_1 folder to run main.js file
   ```bash
   rithi@Workstation MINGW64 ~/dummy_test
   $ cd tasks/Task_1

   rithi@Workstation MINGW64 ~/dummy_test/tasks/Task_1 (main)
   $ ls
   README.md  common/  main.js  tests/
   ```
5. Now start running the test cases by providing USERNAME and TOKEN on CLI
   ```bash
   $ k6 run -e TOKEN=<your_generated_token_from_github> -e USERNAME=<github_username> main.js
   ```
   - --e : Here -e means the --env CLI flags, the environment variables are exposed through a global __ENV variable, that can be used while running the k6 file
     - for example to use -e in CL:
     ```js
     import http from 'k6/http';
     import { sleep } from 'k6';

     export default function () {
     const res = http.get(`http://${__ENV.MY_HOSTNAME}/`);
     sleep(1);
     }
     ```
     ```bash
     $ k6 run -e MY_HOSTNAME=test.k6.io script.js
     ```
   6. After running the k6 tests
      ```bash
      rithi@Workstation MINGW64 ~/dummy_test/tasks/Task_1 (main)
      $ k6 run -e TOKEN=<your_generated_token_from_github> -e USERNAME=<github_username> main.js

              /\      |‾‾| /‾‾/   /‾‾/
         /\  /  \     |  |/  /   /  /
        /  \/    \    |     (   /   ‾‾\
       /          \   |  |\  \ |  (‾)  |
      / __________ \  |__| \__\ \_____/ .io

      execution: local
         script: main.js
         output: -

      scenarios: (100.00%) 3 scenarios, 12 max VUs, 5m35s max duration (incl. graceful stop):
              * scenario1: 1 iterations for each of 1 VUs (maxDuration: 5m0s, exec: userAuthAndValidateData, gracefulStop: 30s)
              * scenario2: 1 iterations for each of 1 VUs (maxDuration: 5m0s, exec: negativeScenarios, startTime: 5s, gracefulStop: 30s)
              * scenario3: Up to 10 looping VUs for 15s over 3 stages (gracefulRampDown: 0s, exec: multiVUsers, startTime: 5s, gracefulStop: 30s)
      INFO[0003] Authentication to github api is successful    source=console
      INFO[0008] Unauthorized access: Correctly returned 401 status  source=console
      INFO[0008] Unauthorized access: Correctly returned "Bad Credentials" meesage  source=console
      INFO[0008] Missing Field: Expected response 422 is received  source=console
      INFO[0008] Missing Field: Correctly returned "Missing feild" response  source=console
      INFO[0009] Invalid endpoint: Expected response 404 is received  source=console
      INFO[0009] Invalid endpoint: Correctly returned "Not Found" meesage  source=console
      INFO[0009] Invalid Field: Expected response 400 is received  source=console
      INFO[0009] Invalid Field: Correctly returned "Bad Request" and json error message  source=console
      INFO[0022] report generation                             source=console
      INFO[0022] [k6-reporter v2.3.0] Generating HTML summary report  source=console
     
      █ scenario 1: Check Github User Authentication And Data Validation

       █ Verify the github user authentication with data validation

         ✓ Authentication status is 200
         ✓ Authenticated user name correct (login: Rithik-codes)
         ✓ Create repo status is 201
         ✓ Repo name created is correct (name: test-repo)
         ✓ Repo description is correct
         ✓ Delete created repo status is 204

      █ scenario 2: Check Different Error Input Handlings For Github API

       █ Verify the github unauthorized access - Invalid token

         ✓ Expected unauthorized status is 401 for unauthorized access
         ✓ Expected response contains "Bad credentials" for unauthorized access

       █ Verify github post request for creation of repo with empty/missing input fields

         ✓ Expected 422 for missing input field payload
         ✓ Expected response contains "Missing feild" missing input field payload

       █ Verify invalid endpoint response for github api

         ✓ Expected 404 Not Found when accessing invalid path "/invalid_endpoint"
         ✓ Expected response contains "Not Found" for invalid endpoint

       █ Verify github repo creation with invalid/Unsupported payload

         ✓ Expected 400 for invalid payload
         ✓ Expected response contains "Bad Request" for invalid payload

      █ scenario 3: Check For Multiple User Performance For Github API

       ✓ Fetch repositories status is 200

      checks.........................: 100.00% ✓ 290       ✗ 0
      data_received..................: 487 kB  24 kB/s
      data_sent......................: 18 kB   916 B/s
      group_duration.................: avg=377.03ms min=302.26ms med=333.43ms max=2.39s    p(90)=479.39ms p(95)=527.53ms
      http_req_blocked...............: avg=8.46ms   min=0s       med=0s       max=361.44ms p(90)=0s       p(95)=0s
      http_req_connecting............: avg=3.62ms   min=0s       med=0s       max=222.8ms  p(90)=0s       p(95)=0s
      http_req_duration..............: avg=351.16ms min=286.94ms med=328.88ms max=1.14s    p(90)=416.08ms p(95)=493.18ms
        { expected_response:true }...: avg=351.18ms min=286.94ms med=328.81ms max=1.14s    p(90)=412.17ms p(95)=494.83ms
      http_req_failed................: 1.41%   ✓ 4         ✗ 279
      http_req_receiving.............: avg=1.96ms   min=0s       med=0s       max=15.14ms  p(90)=8.39ms   p(95)=11.66ms
      http_req_sending...............: avg=277.79µs min=0s       med=139.6µs  max=5.89ms   p(90)=585.52µs p(95)=620.2µs
      http_req_tls_handshaking.......: avg=4.75ms   min=0s       med=0s       max=125.64ms p(90)=0s       p(95)=0s
      http_req_waiting...............: avg=348.92ms min=286.85ms med=326.62ms max=1.13s    p(90)=411.55ms p(95)=492.85ms
      http_reqs......................: 283     14.133147/s
      iteration_duration.............: avg=369.61ms min=302.71ms med=333.05ms max=2.39s    p(90)=477.54ms p(95)=527.64ms
      iterations.....................: 278     13.883444/s
      vus............................: 1       min=0       max=10

      running (0m20.0s), 00/12 VUs, 278 complete and 10 interrupted iterations
      scenario1 ✓ [====================] 1 VUs      0m02.4s/5m0s  1/1 iters, 1 per VU
      scenario2 ✓ [====================] 1 VUs      0m01.6s/5m0s  1/1 iters, 1 per VU
      scenario3 ✓ [====================] 00/10 VUs  15s

      ```
    7. A result.html file will be created it the same location, you can open the file in browser and check different checks and thersholds and time durations
       

