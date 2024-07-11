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
# you may need to run git instaled first
git clone https://github.com/sereen-786/tasks.git
```

Or, download all pretrained weights from [tasks repo download](https://github.com/sereen-786/tasks/archive/refs/heads/main.zip)
```text
tasks
└── Task_1
    ├── common
    │   └── const.js   
    ├── tests
    │   ├── errorHandling.js
    │   ├── multiUser.js
    │   └── userAuthWithDataValidation.js
    └── main.js
```
## 4. Github account and token creation -- if doesnot exist
1. To run these test/pass them or to access github api's you need to have a github account with - USERNAME and TOKEN
2. Creation of account you can check link and proceed with the account creation [Github account creation](https://docs.github.com/en/get-started/onboarding/getting-started-with-your-github-account)
3. If account is already present then skip the above 2 steps.
4. Now generate the TOKEN to authenticate using github api to do operations.
5. Check the steps here to generate TOKEN [Generate github token](https://docs.github.com/en/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
   ![image](https://github.com/sereen-786/tasks/assets/82365795/f3238845-2fdd-46f6-8f68-21706b111e45)
6. **Finally copy USERNAME and the generated TOKEN and use it while running test cases**
