// var Sails = require('sails'),
//   sails;

// before(function(done) {

//   // Increase the Mocha timeout so that Sails has enough time to lift.
//   this.timeout(15000);

//   Sails.lift({
//       hooks: {
//         "sequelize": require('../'),
//         // Load the hook
//         "orm": false,
//         "pubsub": false,
//         // Skip grunt (unless your hook uses it)
//         "grunt": false,
//       }
//   //   // configuration for testing purposes
//   }, function(err, server) {
//   //   sails = server;
//   //   if (err) return done(err);
//   //   // here you can load fixtures, etc.
//     return done(err, server);
//   });
// });

// after(function(done) {
//   // here you can clear fixtures, etc.
//   Sails.lower(done);
// });

var Sails = require('../app').sails;
describe('Beatniks dev test ::', function() {

  // Var to hold a running sails app instance
  var sails;

  // Before running any tests, attempt to lift Sails
  before(function(done) {

    // Hook will timeout in 10 seconds
    this.timeout(11000);

    // Attempt to lift sails
    Sails().lift({
      hooks: {
        "sequelize": require('../node_modules/sails-hook-sequelize'),
        // Load the hook
        "orm": false,
        "pubsub": false,
        // Skip grunt (unless your hook uses it)
        "grunt": false,
      }
    },function (err, _sails) {
        if (err) return done(err);
        sails = _sails;
        return done(err, sails);
    });
  });

  // After tests are complete, lower Sails
  after(function (done) {
    return done();
  });

  // Test that Sails can lift with the hook in place
  it('sails does not crash', function() {
    return true;
  });
});