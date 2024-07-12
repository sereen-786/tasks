# Setting section
*** Settings ***
Library         SeleniumLibrary
Library         OperatingSystem
Test Teardown   Close All Browsers


*** Variables ***
${URL}              https://www.google.com/?hl=en
${TITLES_FILE}      ./results/result_titles.txt         # Results file to store all the google search result titles of first page
${BROWSER}          Chrome


*** Keywords ***
Verify Google Search Results
    [Documentation]  Verify google search results is success.
    Open Browser  ${URL}  ${BROWSER}
    Maximize Browser Window
    ${google_popup_status}  Run Keyword And Return Status  Wait Until Element Is Visible  xpath://*[@id="S3BnEe"]
    Run Keyword If  ${google_popup_status}  Click Element  xpath://*[@id="L2AGLb"]/div     # If google pop up appears then click element to 'Accept All'
    Wait Until Element Is Visible  xpath://img[@alt='Google']
    Input Text  name:q  Clarivate Analytics      # Input google search box 'Clarivate Analytics'
    Wait Until Element Is Visible  name:btnK
    Click Element   name:btnK     # Hit search button
    Wait Until Keyword Succeeds  5sec  1sec  Title Should Be  Clarivate Analytics - Google Search

Scroll To Element
    [Documentation]  Get the positions to scroll to elements.
    ...              Arguments:
    ...              - locator: input the element locator
    [Arguments]      ${locator}
    ${x}  Get Horizontal Position  ${locator}
    ${y}  Get Vertical Position    ${locator}
    Execute Javascript  window.scrollTo(${x}, ${y})
    sleep  2


*** Test Cases ***
Scenario 1: Verify And Capture Titles Of All Search Results From Clarivate First Page To a Text File
    [Documentation]  This test case checks the clarivate result page and captures the result titles
    ...              into a text file.
    ...              - Navigate to www.google.com
    ...              - Search for 'Clarivate Analytics'
    ...              - Capture the title of all results of first page to a text file
    [Tags]   scenario1
    [Setup]  Remove File  ${TITLES_FILE} 
    Verify Google Search Results
    ${titles}  Get Webelements   xpath://h3
    Should Not Be Empty   ${titles}
    FOR  ${title}  IN  @{titles}
        ${title_text}  Get Text   ${title}
        Continue For Loop if  '${title_text}' == '${EMPTY}'
        Append To File  ${TITLES_FILE}  ${title_text}\n
    END

Scenario 2: Verify Filter Checkbox Job Count 'Bangalore(count)' Is Equal To Total Job Count On Webpage Result
    [Documentation]  This test case checks the clarivate careers page and compares the job count
    ...              between checkbox filter city(count) count to page resulted total job count to be same.
    ...              - Open from goolge results https://clarivate.com
    ...              - Accept cookies if any
    ...              - Filter on basis of checkbox 'Category=Technology(count)' and 'City='Bangalore(count)'
    ...              - Now check total job count on page == checkbox filter showing count for 'City='Bangalore(count)'
    [Tags]  scenario2 
    Verify Google Search Results
    Click Link  xpath://a[@href='https://clarivate.com/']        # Click on the link 'https://clarivate.com/' from google results
    ${cookies_popup}  Run Keyword And Return Status  Wait Until Element Is Visible  id:onetrust-pc-btn-handler
    ${accept_button}  Run Keyword And Return Status  Wait Until Element Is Visible  id:onetrust-accept-btn-handler
    ${cancel button}   Run Keyword And Return Status  Wait Until Element Is Visible   xpath://*[@id="onetrust-close-btn-container"]/button
    Run Keywords  Run Keyword If   '${cookies_popup}' == '${accept_button}'   Click Button  id:onetrust-accept-btn-handler     # Accept cookies if any
    ...  AND  Run Keyword If   '${cookies_popup}' == '${cancel_button}'   Click Button  xpath://*[@id="onetrust-close-btn-container"]/button        # If no accept is found then cancel it
    Wait Until Element Is Visible  xpath://*[@id="menu-item-13"]/a     # Check if the careers option is available
    Click Link  xpath://*[@id="menu-item-13"]/a                  # Hit on the careers option
    Switch Window  New                           # Opens a new tab so switch to it
    ${cookies_message}  Run Keyword And Return Status  Wait Until Element Is Visible  xpath://div[@aria-label='cookie']
    Run Keyword If  ${cookies_message}  Click Button  xpath://button[normalize-space()='Allow']     # Allow cookies if any
    Wait Until Element Is Visible  xpath://*[@id="typehead"]   # Wait till the search option element is visible
    Click button  id:ph-search-backdrop                   # Click for search jobs
    Wait Until Element Is Visible  xpath://span[normalize-space()='Category']   # Wait until 'Category' option is visible
    Click Element  xpath://span[normalize-space()='Category']    # Click on 'Category' dropdown
    Select Checkbox   xpath://input[@data-ph-at-text='Technology']    # Select checkbox 'Category=Technology'
    Scroll To Element  xpath://span[normalize-space()='City']     # Scroll to option 'City'
    Wait Until Element Is Visible  xpath://span[normalize-space()='City']       # Wait until 'City' option is visible
    Click Element  xpath://span[normalize-space()='City']                  # Click on 'City' dropdown
    Select Checkbox  xpath://input[@data-ph-at-text='Bangalore']      # Select checkbox 'City='Bangalore'
    sleep  2            # Sleep 2s here for page to filter the job result on webpage after selecting the checkboxes
    ${get_job_count_from_search_filter}  Get element attribute  xpath://input[@data-ph-at-text='Bangalore']  data-ph-at-count    # provides the value of filter result job 'count' from 'Bangalore(count)
    Log To Console  Total job count from search filter for Bangalore(_) ${get_job_count_from_search_filter}
    ${page_top_job_count}  Get text  xpath://span[@data-ph-at-id='search-page-top-job-count']    # provides the web page total job count result for filtered jobs
    Log To Console  Total job count from right side of the results ${page_top_job_count}
    ${count_match}  Run Keyword And Return Status  Should Be Equal  ${get_job_count_from_search_filter}  ${page_top_job_count}
    # To check here if the 'Bangalore(count)' == page total job result count
    Run Keyword If  ${count_match}  Log To Console  Both the job count values are matching successfully ${get_job_count_from_search_filter}==${page_top_job_count}
    ...  ELSE  Fail  Both the job count values are mismatched ${get_job_count_from_search_filter}!=${page_top_job_count}
