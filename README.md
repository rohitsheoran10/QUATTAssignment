Welcome!
Let me help you to understand the project.


How to run the tests?
=====================

Method1: A bit long but more satisfying (eye catching report will be generated)

1.  Download or clone the repository on local machine.
2.  Open the project in an IDE/editor ( i have used Visual Code).
3.  Open the terminal window in the editor and type below commands:
    node -v      // this is to ensure that node.js is installed on the system
    npm -v      // this is to ensure that npm is available to download dependencies
4. Run the command in the terminal
    npm install
    to download the dependencies for the project
5. Run the command in the terminal
    npm test run
    to run the tests
6. Run the command in the terminal
    npm run report
    to run the tests and generate the report.
    
    The generated report can be accessed from the folder "mochawesome-report"



Method2: Short and sweet (CI/CD)

1.  Access the githhub repository
    https://github.com/rohitsheoran10/QUATTAssignment.git
2.  Go to "Actions"
3.  Under the section "All workflows" , select the last run workflow
4.  Click on "Re-run all jobs"

Note: The eye catchy report using the mochawesome (as you can see in Method 1) will not be generated in this case as i still need to debug why it is not working. This will be an improvement for the future version.
Also currently the tests run on node version 21.0. Same version on which i have tested it on my local.

In order to see the results open the results of the job by clicking "1 job completed" --> "build(21.x)"
The test results are present under the step "Run npm test"





Tool Set:
========
Javascript :Programming Language
Mocha: JavaScript Test Framework running on Node.js
npm: Package manager for node.js
SuperTest: JavaScript library to silmulate HTTO requests
Chai: Javascript assertion library
Mochawesome: Reporting Tool for Mocha
Github Actions: CI/CD



Test Case Details:
==================
getUserDetails.spec.js: Single request (GET) test case Sample
goRestE2ETestCase.spec.js: E2E test case for CRUD test on the API.

Details on goRestE2ETestCase.spec.js are present in the test case using comments.



CI/CD:
======

CI/CD pipeline has been created using Github Actions.
Trigger: Commit to the main branch triggers the test



Folder Structure:
================

.github:    github Actions yml file containing the configurations
assets:     sample screen shot of the report generated using mochawesome
mochawesome-report:   reports generated from the test run
node_modules
reports: folder where github actions will store the generated json report (not yet working)
test:  contains the spec files
testdata: contains the data files.













