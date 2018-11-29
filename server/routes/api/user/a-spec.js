'use strict';

const app = require('../../../index');
const request = require('supertest');

describe('USERS', function() {
  const baseUrl = '/api/v1/users';
  const setUser = {
    username: 'user',
    password: 'test'
  };

  /**
   * DELETE
   */
  describe('DELETE', function() {
    it('should delete a user', function(done) {
      request(app)
        .post(baseUrl)
        .send(setUser)
        .set('Accept', 'application/json')
        .end( function(err, resp) {
          let user = resp.body;
          request(app)
            .delete(`${baseUrl}/${user._id}`)
            .set('Authorization', 'Bearer ' + user.token)
            .end( function (err, resp) {
              expect(resp.body._id).to.eql(user._id);
              done();
            });
        });
      });
  });

  describe('POST, GET, PUT', () => {
    let user;

    /**
     * GET
     */
    it('should get a list of users if request made by an admin', done => {
      const testUser = Object.assign({role: 'admin'}, setUser);
      request(app)
        .post(baseUrl)
        .send(testUser)
        .end((err, resp) => {
          user = resp.body;
          request(app)
            .get(baseUrl)
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer ' + user.token)
            .expect(200)
            .end((err,resp) => {
              // TODO - more specific test here
              expect(resp.body).to.be.an('array');
              done(err);
            });
        })
    });

    it('should return 401 if user is not an admin', done => {
      request(app)
        .post(baseUrl)
        .send(setUser)
        .end((err, resp) => {
          user = resp.body;
          request(app)
            .get(baseUrl)
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer ' + user.token)
            .expect(401)
            .end((err,resp) => {
              done(err);
            });
        })
    });

    it('should get a single user by id', done => {
      request(app)
        .post(baseUrl)
        .send(setUser)
        .end((err, resp) => {
          user = resp.body;
          request(app)
            .get(`${baseUrl}/${user._id}`)
            .set('Accept', 'application/json')
            .expect(200)
            .end((err,resp) => {
              expect(resp.body._id).to.eql(user._id);
              done();
            });
        });
    });

    /**
     * PUT
     */
    it('should update a single user', done => {
      request(app)
        .post(baseUrl)
        .send(setUser)
        .end((err, resp) => {
          user = resp.body;
          request(app)
            .put(`${baseUrl}/${user._id}`)
            .send({username: 'new username'})
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer ' + user.token)
            .expect(200)
            .end((err,resp) => {
              expect(resp.body.username).to.eql('new username');
              done();
            });
        });
    });

    /**
     * POST
     */
    it('should create a user', done => {
      request(app)
        .post(baseUrl)
        .send(setUser)
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, resp) {
          // TODO - more specific test here
          expect(resp.body).to.be.an('object');
          user = resp.body;
          done();
        });
    });

    afterEach((done) => {
      request(app)
        .delete(`${baseUrl}/${user._id}`)
        .set('Authorization', 'Bearer ' + user.token)
        .expect(200)
        .end(function(err, resp) {
        done();
      });
    });
  });

});
