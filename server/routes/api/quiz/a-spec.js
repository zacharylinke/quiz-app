const app = require('../../../index');
const request = require('supertest');
//const expect = require('chai').expect;

describe('QUIZZES', () => {
  const baseUrl = '/api/v1/quizzes';
  const setQuiz = {
    title: 'test quiz'
  };
  let currentUser = {};

  before(done => {
    request(app)
      .post('/api/v1/users')
      .send({
        username: 'user',
        password: 'test'
      })
      .set('Accept', 'application/json')
      .end((err, resp) => {
        currentUser = resp.body;
        done();
      });
  });

  after(done => {
    request(app)
      .delete(`/api/v1/users/${currentUser._id}`)
      .set('Authorization', 'Bearer ' + currentUser.token)
      .expect(200)
      .expect('Content-Type', /json/)
      .end( (err, resp) => {
        done();
      });

  });

  describe('DELETE', () => {
    it('should delete a quiz', done => {
      request(app)
        .post(baseUrl)
        .send(setQuiz)
        .set('Authorization', 'Bearer ' + currentUser.token)
        .set('Accept', 'application/json')
        .end( (err, resp) => {
          let quiz = resp.body;
          request(app)
            .delete(`${baseUrl}/${quiz._id}`)
            .set('Authorization', 'Bearer ' + currentUser.token)
            .expect(200)
            .expect('Content-Type', /json/)
            .end( function (err, resp) {
              expect(resp.body._id).to.eql(quiz._id);
              done();
            });
        });
      });
  });

  describe('POST, GET, PUT', () => {
    let quiz;

    it('should create a quiz', done => {
      request(app)
        .post(baseUrl)
        .send(setQuiz)
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + currentUser.token)
        .expect(200)
        .expect('Content-Type', /json/)
        .end( (err, resp) => {
          // TODO - more specific test here
          expect(resp.body).to.be.an('object');
          quiz = resp.body;
          done();
        });
    });

    it('should get a list of quizzes', done => {
      request(app)
        .post(baseUrl)
        .send(setQuiz)
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + currentUser.token)
        .end((err, resp) => {
          quiz = resp.body;
          request(app)
            .get(baseUrl)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err,resp) => {
              // TODO - more specific test here
              expect(resp.body).to.be.an('array');
              done();
            });
        })
    });

    it('should get a single quiz by id', done => {
      request(app)
        .post(baseUrl)
        .send(setQuiz)
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + currentUser.token)
        .end((err, resp) => {
          quiz = resp.body;
          request(app)
            .get(`${baseUrl}/${quiz._id}`)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err,resp) => {
              expect(resp.body._id).to.eql(quiz._id);
              done();
            });
        });
    });

    it('should update a single quiz', done => {
      request(app)
        .post(baseUrl)
        .send(setQuiz)
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + currentUser.token)
        .end((err, resp) => {
          quiz = resp.body;
          request(app)
            .put(`${baseUrl}/${quiz._id}`)
            .send({title: 'new title'})
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer ' + currentUser.token)
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err,resp) => {
              expect(resp.body.title).to.eql('new title');
              done();
            });
        });
    });

    afterEach((done) => {
      request(app)
        .delete(`${baseUrl}/${quiz._id}`)
        .set('Authorization', 'Bearer ' + currentUser.token)
        .expect(200)
        .end(function(err, resp) {
        done();
      });
    });
  });

});

