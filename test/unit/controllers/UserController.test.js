var request = require('supertest');

describe('UsersController', function() {

  describe('#login()', function() {
    it('should redirect to /mypage', function (done) {
      request(sails.hooks.http.app)
        .post('/v1/user/login')
        .send({ name: 'test', password: 'test' })
        .expect(302)
        .expect('location','/mypage', done);
    });
    it('should give user or password not matching', function (done) {
      request(sails.hooks.http.app)
        .post('/v1/user/login')
        .send({ name: 'vishnu', password: 'test' })
        .expect(500)
        .expect('Content-Type', /json/,done)
        // .expect('sucess',false,)
        // .expect('err',"user or password not matching",done)
        // .expect('json',{sucess:false,err:'user or password not matching'},done)
    });
  });
});

