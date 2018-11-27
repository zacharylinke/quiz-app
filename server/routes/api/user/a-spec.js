const app = require('../../../index');
const request = require('supertest');
const expect = require('chai').expect;

describe('[USERS]', function() {

  describe('DELETE', function() {
    it('should delete a user', function(done) {
        request(app)
            .post('/api/v1/users')
            .send({username: 'user', password: 'test'})
            .set('Accept', 'application/json')
            .end( function(err, resp) {
                let user = resp.body;
                request(app)
                    .delete(`/api/v1/users/${user._id}`)
                    .set('Authorization', 'Bearer ' + user.token)
                    .end( function (err, resp) {
                        expect(resp.body._id).to.eql(user._id);
                        done();
                    });
            });
      });
  });

  describe('POST', function() {
    let userId;

    it('should create a user', function(done) {
        request(app)
            .post('/api/v1/users')
            .send('username=user&password=test')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, resp) {
                // TODO - more specific test here
                expect(resp.body).to.be.an('object');
                userId = resp.body._id;
                done();
            });
    });

    afterEach((done) => {
        request(app)
            .delete(`/api/v1/users/${userId}`)
            .expect(200)
            .end(function(err, resp) {
            done();
        });;
    });
  });

});