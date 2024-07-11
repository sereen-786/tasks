## 1. About Task

This project covers two scenarios for front end automation written using [Robot Framework](http://robotframework.org) and [Selenium Library](https://github.com/robotframework/SeleniumLibrary)

#### Scenario 1:
Navigate to [Google Search](https://www.google.com/) and search for 'Clarivate Analyics'. Write the titles of all results on the first page to a text file.
#### Scenario 2:
Open [https://clarivate.com/](https://clarivate.com/) website from the results. 
Click on [Careers Link](https://careers.clarivate.com/)
Filter the list for 'Technology',City as 'Bangalore'
Verify that number of jobs shown in brackets next to the city (ex:Bangalore(5) matches the number of jobs shown at the right [clarivate careers page](https://careers.clarivate.com/search-results)

## 2. Robot Framework and SeleniumLibrary

[Robot Framework](http://robotframework.org) is a generic open source automation framework for acceptance testing, acceptance test driven development (ATDD), and robotic process automation (RPA). It has simple plain text syntax and it can be extended easily with generic and custom libraries.
Robot Framework is operating system and application independent. It is implemented using [Python](http://python.org) which is also the primary language to extend it. The framework has a rich ecosystem around it consisting of various generic libraries and tools that are developed as separate projects. For more information about Robot Framework and the ecosystem, see [robot framework website](http://robotframework.org.)

[SeleniumLibrary](https://github.com/robotframework/SeleniumLibrary) is a web testing library for [Robot Framework](http://robotframework.org) that utilizes the [Selenium](https://www.seleniumhq.org/) tool internally. The project is hosted on [GitHub](https://github.com/robotframework/SeleniumLibrary) and downloads can be found from [PyPI](https://pypi.org/project/robotframework-seleniumlibrary/) SeleniumLibrary currently works with Selenium 4. It supports Python 3.8 through 3.11. In addition to the normal [Python](https://www.python.org/) interpreter, it works also with [PyPI](https://pypi.org/project/robotframework-seleniumlibrary/).

## 3. Download pretrained weights

```bash
# you may need to run git instaled first
git clone https://github.com/sereen-786/tasks.git
```

Or, download all pretrained weights from [tasks repo download](https://github.com/sereen-786/tasks/archive/refs/heads/main.zip)
```text
tasks
└── Task_1
    └── test
        ├── verify_titles_and_job_counts.robot
        └── results
            ├── log.html
            ├── output.xml
            ├── report.html
            └── results_titles.txt
```
## 4. Installation
### 4.1 Install Python
To install on Mac refer this link [python on mac](https://phoenixnap.com/kb/install-python-mac)

To install on Windows refer link [python on windows](https://phoenixnap.com/kb/how-to-install-python-3-windows)
1. Visit the official download page of python. [Link](https://www.python.org/downloads/windows/)
2. Download the latest version for Windows.
3. Run the downloaded executable file. The Python setup modal should appear. Tick the Add python.exe to PATH to automatically include python to PATH.
    ![image](https://github.com/sereen-786/tasks/assets/82365795/2a5eeb63-f40d-4fbc-bf3c-1844407e428f)
4. Click Install Now and follow the instructions prompted by python setup modal. Python will usually be installed in C:\Users\<Username>\AppData\Local\Programs\Python\<Python Version>. In case you forgot to tick the Add python.exe to PATH, be sure to manually add this to your environment variable PATH.
5. To add python to PATH, Open System Properties. To open, you can directly search Edit the system environment variables in the Start menu. In the System Properties, open Environment Variables.
6. Be sure to add the Python folder and the script folder inside it in PATH. See example below. If in any case, python is in a different directory, be sure to locate it correctly and add that directory in PATH.
7. ```bash
   C:\Users\<username>\AppData\Local\Programs\Python\<Python Version>\
   C:\Users\<username>\AppData\Local\Programs\Python\<Python Version>\Scripts\
   ```
8. Once Python is downloaded, installed and the needed directories were added to PATH. You can open Command Prompt (cmd) to check if Python was installed properly. In cmd, run:
9. ```bash
   python --version
   ```

### 4.2 Install Robot Framework
1. If you already have Python with pip installed, you can simply run 
```bash
pip install robotframework
```
2. To make sure Robot Framework is installed correctly, open a command prompt or terminal and run the following command:
```bash
robot --version
```

### 4.3 Install SeleniumLibrary
Just run the pip command to install:
```bash
pip install robotframework-seleniumlibrary
```

### 4.4 Download Web driver on Windows
- [Chrome](https://chromedriver.chromium.org/downloads)
- [Edge](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/)   --> you can also place it in the C:/Windows/System32
- [Firefox](https://github.com/mozilla/geckodriver/releases)

1. Download any driver like Chromedriver.exe from its official website, extract the .exe file and copy this .exe file in scripts folder of Python installation, e.g. C:\Python36\Scripts (We will need to save driver in the location C:\Users\befor\AppData\Local\Programs\Python\Python36\Scripts)

2. After this, add this scripts path in Environment variable, as below:
![image](https://github.com/sereen-786/tasks/assets/82365795/d903f9de-654c-4505-b5b7-f67f8b98479d)
- For more info see [Link](https://www.selenium.dev/selenium/docs/api/py/index.html#drivers)

### 4.3 PyCharm Installation (optional)
1. To install on Mac [for Mac](https://medium.com/@saileshRamesh/robot-framework-python-setup-guide-mac-b5e57c3ba9f9)
2. To install on Windows [for Windows](https://medium.com/geekculture/how-to-setup-robot-framework-for-test-automation-on-windows-2a9cc0da0763)


## 5. Execution of test cases

1. Open the 





