## About Task

This project covers two scenarios for front end automation written using [Robot Framework](http://robotframework.org) and [Selenium Library](https://github.com/robotframework/SeleniumLibrary)

#### Scenario 1:
Navigate to [Google Search](https://www.google.com/) and search for 'Clarivate Analyics'. Write the titles of all results on the first page to a text file.
#### Scenario 2:
Open [https://clarivate.com/](https://clarivate.com/) website from the results. 
Click on [Careers Link](https://careers.clarivate.com/)
Filter the list for 'Technology',City as 'Bangalore'
Verify that number of jobs shown in brackets next to the city (ex:Bangalore(5) matches the number of jobs shown at the right [clarivate careers page](https://careers.clarivate.com/search-results)

## Introduction of Robot Framework and SeleniumLibrary

[Robot Framework](http://robotframework.org) is a generic open source automation framework for acceptance testing, acceptance test driven development (ATDD), and robotic process automation (RPA). It has simple plain text syntax and it can be extended easily with generic and custom libraries.
Robot Framework is operating system and application independent. It is implemented using [Python](http://python.org) which is also the primary language to extend it. The framework has a rich ecosystem around it consisting of various generic libraries and tools that are developed as separate projects. For more information about Robot Framework and the ecosystem, see [robot framework website](http://robotframework.org.)

[SeleniumLibrary](https://github.com/robotframework/SeleniumLibrary) is a web testing library for [Robot Framework](http://robotframework.org) that utilizes the [Selenium](https://www.seleniumhq.org/) tool internally. The project is hosted on [GitHub](https://github.com/robotframework/SeleniumLibrary) and downloads can be found from [PyPI](https://pypi.org/project/robotframework-seleniumlibrary/) SeleniumLibrary currently works with Selenium 4. It supports Python 3.8 through 3.11. In addition to the normal [Python](https://www.python.org/) interpreter, it works also with [PyPI](https://pypi.org/project/robotframework-seleniumlibrary/).

