const app = require('./index');
const request = require('supertest');
const expect = require('chai').expect;

describe('[QUIZZES]', function(){

    it('should get all quizzes', function(done) {
        request(app)
            .get('/api/v1/quizzes')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, resp) {
                console.log(resp.body);
                expect(resp.body).to.be.an('array');
                done();
            })
    });
});
