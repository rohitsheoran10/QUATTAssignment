In order to run the tests

npm test run


In order to run the tests and generate a report using mochawesome use the below command 

npm run report












E2E test case for GO REST API covered in goRestE2ETestCase.spec.js
===================================================================

Step1.  Create a user using access bearer token , 
        save the {userid} from the response 
        and assert the reponse code and returned user details.

Step2.  [-ve test case] Verify that a new user cannot be created with the same email address by asserting the response code

Step3.  Get the user details using the {userid} from step1 
        and assert the reponse code and returned user details.

Step4.  Update the user details using PUT
        and assert the reponse code and returned user details.

Step5. 
        Update the name and email using the Patch request 
        and assert the reponse code and returned user details. 

Step6. Delete the user and assert the status code. 

Step7: [-ve test case] Verify that details of the deleted user cannot be retrieved.