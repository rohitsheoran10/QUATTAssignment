const request = require('supertest');
const expect = require('chai').expect;
const moch = require('mocha');
const userauthdata = require('../testdata/userauthdata.json');


describe('Get API test', () => {
    const baseurl = 'https://gorest.co.in/';
    var userId = 6927844
    //var token = userauthdata.token ;    
    


    // This is an example and like this we can create test cases for individual requests

    it('should fetch the user details', (done) => {
        var name = 'Rev. Dhanapati Desai'
        var email= 'dhanapati_desai_rev@rath-gislason.example'
        request(baseurl)
            .get('public/v2/users/'+ userId)
            .query(userId)
            //.set('Authorization', 'Bearer '+ token)       
            .end(function(err, res) {
                console.log(res.body)
                expect(res.statusCode).to.be.equal(200);
                expect(res.body.id).to.be.equal(userId);
                expect(res.body.name).to.be.equal(name);
                expect(res.body.email).to.be.equal(email);
                // expect(res.body.name).not.to.be.null;
                // expect(res.body.email).not.to.be.null;
                // expect(res.body.gender).not.to.be.null;
                // expect(res.body.status).not.to.be.null;           
                         
                if (err) {
                    throw err;
                }
                done();
            });
    });



      
});