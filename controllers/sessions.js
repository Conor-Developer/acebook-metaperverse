const User = require("../models/user");
const bcrypt = require("bcrypt");

const validateEmail = (email) => {
  return User.findOne({ email: email }).then((result) => { 
    return result !== null
  });
}

const SessionsController = {
  New: (req, res) => {
    res.render("sessions/new", { message: req.flash("message") });
  },

  Create: (req, res) => {
    console.log("trying to log in");
    const email = req.body.email;
    const password = req.body.password;
    
    validateEmail(email).then((result) => {
      if (result) {
        User.findOne({ email: email }).then((user) => {
          bcrypt.compare(password, user.password, function (err, isMatch) {
            if (err) throw err;

            if (isMatch) {
              req.session.user = user;
              res.redirect("/posts");
            } else {
              req.flash("message", "Invalid Credentials");
              res.redirect("sessions/new");
            }
          });
        });
      } else {
        req.flash("message", "Invalid Credentials");
        res.redirect("sessions/new");
      }
    })
  },

  Destroy: (req, res) => {
    console.log("logging out");
    if (req.session.user && req.cookies.user_sid) {
      res.clearCookie("user_sid");
    }
    res.redirect("/");
  },
};

module.exports = SessionsController;
