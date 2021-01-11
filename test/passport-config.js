const { authenticate } = require('passport');
const passport = require('passport')
    ,LocalStrategy = require('passport-local').Strategy;

function passConfig(){
    function authenticateUser(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
    passport.use(new LocalStrategy(
      authenticateUser()
    ));
}
module.exports = passConfig