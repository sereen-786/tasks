# Task 1: API Automation

## Contents

1. About Task
2. About K6 automation tool
3. Download pretrained weights and file structure
4. Installation of k6 for execution of test cases
5. Execution steps


## About Task

Select any publicly available API (ex: OpenWeatherMap API or GitHub API), identify and
automate three critical scenarios. Provide documentation for each of the automated
scenario.

## About K6 automation tool
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
