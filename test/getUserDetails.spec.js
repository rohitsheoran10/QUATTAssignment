// This is a sample and like this we can create test cases for individual requests

const request = require('supertest');
const expect = require('chai').expect;
const moch = require('mocha');
const userauthdata = require('../testdata/userauthdata.json');


//get the details of user with a specific id
describe('Get API test', () => {
    const baseurl = 'https://gorest.co.in/';
    var userId
    var name
    var email
    var gender
    var status

    var token = userauthdata.token ;     

    // The user ids change in the API results from day to day. So storing a static user id ,name and email is not an option.
    // Need to fetch details before running the GET request for specific user id.
    before(function(done) {
        request(baseurl)
            .get('public/v2/users')
            .end(function(err, res) {
                expect(res.statusCode).to.be.equal(200);
                let res_body = res.body                
                let jsonstr = JSON.stringify(res_body)
                let result = JSON.parse(jsonstr);            
                userId = result[0].id;
                name = result[0].name;
                email = result[0].email;
                gender = result[0].gender;
                status =result[0].status;
                // console.log('userId:'+ userId);
                // console.log('name: ' + name );
                // console.log('email: '+ email);
                // console.log('gender: '+ gender);
                // console.log('status: '+ status);

                if (err) {
                    throw err;
                }
                done();
            });
    });





    it('should fetch the user details', (done) => {        
        request(baseurl)
            .get('public/v2/users/'+ userId)
            .query(userId)
            .set('Authorization', 'Bearer '+ token)       
            .end(function(err, res) {
                console.log(res.body)
                expect(res.statusCode).to.be.equal(200);
                expect(res.body.id).to.be.equal(userId);
                expect(res.body.name).to.be.equal(name);
                expect(res.body.email).to.be.equal(email);
                expect(res.body.gender).to.be.equal(gender);
                expect(res.body.status).to.be.equal(status);
                // expect(res.body.name).not.to.be.null;                         
                         
                if (err) {
                    throw err;
                }
                done();
            });
    });



      
});