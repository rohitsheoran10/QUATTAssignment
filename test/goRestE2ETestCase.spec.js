const request = require('supertest');
const expect = require('chai').expect;
let userdata = require('../testdata/userdata.json');
let updateduserdata = require('../testdata/updateduserdata.json');
const userauthdata = require('../testdata/userauthdata.json');



describe('E2E CRUD API Test', () => {
    const baseurl = 'https://gorest.co.in/';
    var userId;
    var token = userauthdata.token;

    // documentation is poor .Nowhere says that email id should be unique . Gender and status are enumeration
    //Step 1
    it('should successfully create a user', (done) => {
        request(baseurl)
            .post('public/v2/users')
            .send(userdata)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + token)
            .end(function (err, res) {
                console.log(res.body)
                expect(res.statusCode).to.be.equal(201);
                expect(res.body.id).not.to.be.null;
                expect(res.body.name).to.be.equal(userdata.name);
                expect(res.body.email).to.be.equal(userdata.email);
                expect(res.body.gender).to.be.equal(userdata.gender);
                expect(res.body.status).to.be.equal(userdata.status);
                userId = res.body.id;

                if (err) {
                    throw err;
                }
                done();
            });
    });


    //Step2
    it('creating the same user twice is not allowed', (done) => {
        request(baseurl)
            .post('public/v2/users')
            .send(userdata)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + token)
            .end(function (err, res) {
                //console.log(res.body)
                expect(res.statusCode).to.be.equal(422);

                if (err) {
                    throw err;
                }
                done();
            });
    });





    // Issue with API to fetch the userid that is recently generated
    //Documentation says access token is not needed for get request but it does. Sometimes it gets results without token and sometimes not. The behavior is inconsistent.
    //Somtimes the response is 200 but the body is an empty array with no json.
    //Step3
    it('should fetch the user details', (done) => {
        request(baseurl)
            .get('public/v2/users/' + userId)
            .set('Authorization', 'Bearer ' + token)
            .end(function (err, res) {
                console.log(res.body)
                expect(res.statusCode).to.be.equal(200);
                // expect(res.body.id).not.to.be.null;
                // expect(res.body.name).not.to.be.null;
                // expect(res.body.email).not.to.be.null;
                // expect(res.body.gender).not.to.be.null;
                // expect(res.body.status).not.to.be.null;
                expect(res.body.name).to.be.equal(userdata.name);
                expect(res.body.email).to.be.equal(userdata.email);
                expect(res.body.gender).to.be.equal(userdata.gender);
                expect(res.body.status).to.be.equal(userdata.status);

                if (err) {
                    throw err;
                }
                done();
            });
    });


    //Step4
    it('should edit the details of the user using PUT', (done) => {
        request(baseurl)
            .put('public/v2/users/' + userId)
            .send(updateduserdata)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + token)
            .end(function (err, res) {
                console.log(res.body)
                expect(res.statusCode).to.be.equal(200);
                expect(res.body.name).to.be.equal(updateduserdata.name);
                expect(res.body.email).to.contains(updateduserdata.email)
                expect(res.body.gender).to.be.equal(updateduserdata.gender);
                expect(res.body.status).to.be.equal(updateduserdata.status);

                if (err) {
                    throw err;
                }
                done();
            });
    });


    //Step5
    it('should edit the details of the user using PATCH', (done) => {
        var name = 'SuperMichael';
        var email = 'super@email.com';
        request(baseurl)
            .patch('public/v2/users/' + userId)
            .send({ "name": name, "email": email })
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + token)
            .end(function (err, res) {
                console.log(res.body)
                expect(res.statusCode).to.be.equal(200);
                expect(res.body.name).to.be.equal(name);
                expect(res.body.email).to.contains(email)
                expect(res.body.gender).to.be.equal(updateduserdata.gender);
                expect(res.body.status).to.be.equal(updateduserdata.status);

                if (err) {
                    throw err;
                }
                done();
            });
    });


    //Step6
    it('should delete details of the user', (done) => {
        request(baseurl)
            .delete('public/v2/users/' + userId)
            .set('Authorization', 'Bearer ' + token)
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(204);

                if (err) {
                    throw err;
                }
                done();
            });
    });


    //Step7
    it('should not fetch the user details after user is deleted', (done) => {
        request(baseurl)
            .get('public/v2/users/' + userId)
            .set('Authorization', 'Bearer ' + token)
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(404);

                if (err) {
                    throw err;
                }
                done();
            });
    });


});