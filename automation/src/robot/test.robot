####################################################################
*** Settings ***
#####################################################################
Resource            ./resources/resources.robot
Suite Setup         INITIALIZE PASS CRITERIA
#####################################################################

Library    XML
#####################################################################
*** Test Cases ***
#####################################################################
TAG_TTC_01 [Verify the title of the page is tic-tac-toe]
#####################################################################
    [Documentation]    The title should match the game name
    [Tags]             title
    ${TEST_ID}         GET_CASEID    ${TEST_NAME}
    ${PASS}            GET_PASS     ${TEST_ID}
    ${OUTPUT}          GET TITLE
    PASSCRITERIA CHECK      ${PASS}    ${OUTPUT}
#####################################################################

#####################################################################
TAG_TTC_02 [Verify the default values of boxes]
#####################################################################
    [Documentation]    The default values of boxes should be  ''
    [Tags]             box
    ${TEST_ID}         GET_CASEID    ${TEST_NAME}
    ${PASS}            GET_PASS     ${TEST_ID}
    ${OUTPUT}          READ ALL ELEMENTS
    PASSCRITERIA CHECK      ${PASS}    ${OUTPUT}
#####################################################################

#####################################################################
TAG_TTC_03 [Verify the default message for fresh login]
#####################################################################
    [Documentation]    The refresh 
    [Tags]             msg 
    ${TEST_ID}         GET_CASEID    ${TEST_NAME}
    ${PASS}            GET_PASS     ${TEST_ID}
    ${OUTPUT}          GET STATUS
    PASSCRITERIA CHECK      ${PASS}    ${OUTPUT}
#####################################################################

#####################################################################
TAG_TTC_04 [Verify the boxes records "O" the odd click]
#####################################################################
    [Documentation]    The refresh 
    [Tags]             click 
    ${TEST_ID}         GET_CASEID    ${TEST_NAME}
    ${PASS}            GET_PASS     ${TEST_ID}
    CLICK ELEMENT      0-0
    ${OUTPUT}          READ ALL ELEMENTS
    PASSCRITERIA CHECK      ${PASS}    ${OUTPUT}
#####################################################################

#####################################################################
TAG_TTC_05 [Verify the boxes records "X" the even click]
#####################################################################
    [Documentation]    The refresh 
    [Tags]             click 
    ${TEST_ID}         GET_CASEID    ${TEST_NAME}
    ${PASS}            GET_PASS     ${TEST_ID}
    CLICK ELEMENT      0-1
    ${OUTPUT}          READ ALL ELEMENTS
    PASSCRITERIA CHECK      ${PASS}    ${OUTPUT}
#####################################################################

#####################################################################
TAG_TTC_06 [Verify the boxes doesn't record click on already set element]
#####################################################################
    [Documentation]    The refresh 
    [Tags]             click 
    ${TEST_ID}         GET_CASEID    ${TEST_NAME}
    ${PASS}            GET_PASS     ${TEST_ID}
    CLICK ELEMENT      0-1
    ${OUTPUT}          READ ALL ELEMENTS
    PASSCRITERIA CHECK      ${PASS}    ${OUTPUT}
#####################################################################

#####################################################################
TAG_TTC_07 [Verify the status shows turn "X" after odd click]
#####################################################################
    [Documentation]    The refresh 
    [Tags]             msg 
    ${TEST_ID}         GET_CASEID    ${TEST_NAME}
    ${PASS}            GET_PASS     ${TEST_ID}
    CLICK ELEMENT      1-0
    ${OUTPUT}          GET STATUS
    PASSCRITERIA CHECK      ${PASS}    ${OUTPUT}
#####################################################################

#####################################################################
TAG_TTC_08 [Verify the status shows turn "O" after odd click]
#####################################################################
    [Documentation]    The refresh 
    [Tags]             msg 
    ${TEST_ID}         GET_CASEID    ${TEST_NAME}
    ${PASS}            GET_PASS     ${TEST_ID}
    CLICK ELEMENT      1-1
    ${OUTPUT}          GET STATUS
    PASSCRITERIA CHECK      ${PASS}    ${OUTPUT}
#####################################################################

#####################################################################
TAG_TTC_09 [Verify the status shows WON "O" after if "O" wins]
#####################################################################
    [Documentation]    The refresh 
    [Tags]             msg 
    ${TEST_ID}         GET_CASEID    ${TEST_NAME}
    ${PASS}            GET_PASS     ${TEST_ID}
    CLICK ELEMENT      2-0
    ${OUTPUT}          GET STATUS
    PASSCRITERIA CHECK      ${PASS}    ${OUTPUT}
#####################################################################

#####################################################################
TAG_TTC_10 [Verify the status shows WON "X" after if "X" wins]
#####################################################################
    [Documentation]    The refresh 
    [Tags]             click 
    ${TEST_ID}         GET_CASEID    ${TEST_NAME}
    ${PASS}            GET_PASS     ${TEST_ID}
    CLICK REFRESH
    SLEEP            1
    CLICK ELEMENT    0-0
    CLICK ELEMENT    0-1
    CLICK ELEMENT    1-0
    CLICK ELEMENT    1-1
    CLICK ELEMENT    1-2
    CLICK ELEMENT    2-1
    ${OUTPUT}          GET STATUS
    PASSCRITERIA CHECK      ${PASS}    ${OUTPUT}
#####################################################################

#####################################################################
TAG_TTC_11 [Verify the Keys refresh screen after refresh]
#####################################################################
    [Documentation]    The refresh 
    [Tags]             click 
    ${TEST_ID}         GET_CASEID    ${TEST_NAME}
    ${PASS}            GET_PASS     ${TEST_ID}
    CLICK REFRESH
    ${OUTPUT}          READ ALL ELEMENTS
    PASSCRITERIA CHECK      ${PASS}    ${OUTPUT}
#####################################################################
