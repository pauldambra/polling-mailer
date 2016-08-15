const expect = require('expect');
const server = require('../src/server');
const request = require('supertest-as-promised');

describe('the fake api', function()	 {
	this.timeout(8000); //server fakes long computation

    it('returns a list of db items to poll', done => {
        request(server)
            .get('/db/items')
            .expect('Content-Type', /json/)
            .expect(200)
            .catch(err => {
                done(err);
            })
            .then(res => {
                expect(res.body.length).toBeGreaterThan(0);
                done();
            });
    });

	it('can send back changes', done => {
        request(server)
            .get('/thing/2353')
            .expect('Content-Type', /json/)
            .expect(200)
            .catch(err => done(err))
            .then(res => {
            	expect(res.body.id).toBe('2353');
            	expect(Array.isArray(res.body.changes)).toBeTruthy();
            	done();
            });
    });

    it('pretends to send emails', done => {
        request(server)
            .post('/email/send')
            .send({id: 12345, body: 'wat'})
            .expect('Content-Type', /json/)
            .expect(200)
            .catch(err => done(err))
            .then(res => {
            	expect(res.body.id).toBe(12345);
            	expect(res.body.body).toBe('wat');
            	done();
            });
    });
});