/////   START *****   Authentication without any packages   ***** START   /////
// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require("mongoose");

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
// app.use(express.static("public"));

// mongoose.connect("mongodb://localhost:27017/userDB");
// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String,
// });

// const User = new mongoose.model("User", userSchema);

// app.get("/", function (req, res) {
//   res.render("home");
// });

// app.get("/login", function (req, res) {
//   res.render("login");
// });

// app.post("/login", function (req, res) {
//   User.findOne({ email: req.body.username }, function (err, foundUser) {
//     if (err) {
//       console.log(err);
//     } else {
//       if (foundUser) {
//         if (foundUser.password === req.body.password){
//             res.render("secrets")
//         }       
//       }
//     }
//   });
// });

// app.get("/register", function (req, res) {
//   res.render("register");
// });

// app.post("/register", function (req, res) {
//     const newUser = new User({
//       email: req.body.username,
//       password: req.body.password,
//     });

//     newUser.save(function (err) {
//       if (err) {
//         console.log(err);
//       } else {
//         res.render("secrets");
//       }
//     });
//   });

// app.listen(3000, function (req, res) {
//   console.log("Server is started on port 3000");
// });

///// END   *****   Authentication without any packages   ***** END   /////





///// START   *****   Authentication using mongoose-encryption   ***** START   /////
///// Installation: npm install mongoose-encryption dotenv

// require("dotenv").config();
// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption");

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
// app.use(express.static("public"));

// mongoose.connect("mongodb://localhost:27017/userDB");
// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String,
// });

// userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ["password"]})

// const User = new mongoose.model("User", userSchema);

// app.get("/", function (req, res) {
//   res.render("home");
// });

// app.get("/login", function (req, res) {
//   res.render("login");
// });

// app.post("/login", function (req, res) {
//   User.findOne({ email: req.body.username }, function (err, foundUser) {
//     if (err) {
//       console.log(err);
//     } else {
//       if (foundUser) {
//         if (foundUser.password === req.body.password){
//             res.render("secrets")
//         }
//       }
//     }
//   });
// });

// app.get("/register", function (req, res) {
//   res.render("register");
// });

// app.post("/register", function (req, res) {
//     const newUser = new User({
//       email: req.body.username,
//       password: req.body.password,
//     });

//     newUser.save(function (err) {
//       if (err) {
//         console.log(err);
//       } else {
//         res.render("secrets");
//       }
//     });
// });


// app.listen(3000, function (req, res) {
//   console.log("Server is started on port 3000");
// });
///// END   *****   Authentication using mongoose-encryption   ***** END   /////





///// START   *****   Authentication using md5   ***** START   /////
///// Installation: npm install md5

// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require("mongoose");
// const md5 = require("md5");

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
// app.use(express.static("public"));

// mongoose.connect("mongodb://localhost:27017/userDB");
// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String,
// });

// const User = new mongoose.model("User", userSchema);

// app.get("/", function (req, res) {
//   res.render("home");
// });

// app.get("/login", function (req, res) {
//   res.render("login");
// });

// app.post("/login", function (req, res) {
//   User.findOne({ email: req.body.username }, function (err, foundUser) {
//     if (err) {
//       console.log(err);
//     } else {
//       if (foundUser) {
//         if (foundUser.password === md5(req.body.password)){
//             res.render("secrets")
//         }
//       }
//     }
//   });
// });

// app.get("/register", function (req, res) {
//   res.render("register");
// });

// app.post("/register", function (req, res) {

//     const newUser = new User({
//       email: req.body.username,
//       password: md5(req.body.password)
//   });

//   newUser.save(function(err){
//       if (err){
//           console.log(err);
//       } else {
//           res.render("secrets");
//       }
//   });
// });

// app.listen(3000, function (req, res) {
//   console.log("Server is started on port 3000");
// });
///// END   *****   Authentication using md5   ***** END   /////





///// START   *****   Authentication using bcrypt   ***** START   /////
///// Installation: npm install bcrypt

// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
// app.use(express.static("public"));

// mongoose.connect("mongodb://localhost:27017/userDB");
// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String,
// });

// const User = new mongoose.model("User", userSchema);

// app.get("/", function (req, res) {
//   res.render("home");
// });

// app.get("/login", function (req, res) {
//   res.render("login");
// });

// app.post("/login", function (req, res) {
//   User.findOne({ email: req.body.username }, function (err, foundUser) {
//     if (err) {
//       console.log(err);
//     } else {
//       if (foundUser) {
//         bcrypt.compare(
//           req.body.password,
//           foundUser.password,
//           function (err, result) {
//             if (result === true) {
//               res.render("secrets");
//             }
//           }
//         );
//       }
//     }
//   });
// });

// app.get("/register", function (req, res) {
//   res.render("register");
// });

// app.post("/register", function (req, res) {
//   bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
//     const newUser = new User({
//       email: req.body.username,
//       password: hash,
//     });

//     newUser.save(function (err) {
//       if (err) {
//         console.log(err);
//       } else {
//         res.render("secrets");
//       }
//     });
//   });
// });

// app.listen(3000, function (req, res) {
//   console.log("Server is started on port 3000");
// });
///// END   *****   Authentication using bcrypt   ***** END   /////





///// START   *****   Authentication using passport.js   ***** START   /////
///// Installation: npm install passport passport-local passport-local-mongoose express-session dotenv

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const findOrCreate = require("mongoose-findorcreate");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  googleId: String,
  secret: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user){
    done(err, user);
  })
});

// Using Google OAuth
passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/secrets",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
  passReqToCallback   : true
},
function(request, accessToken, refreshToken, profile, done) {
  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return done(err, user);
  });
}
));


app.get("/", function(req, res){
  res.render("home");
});

app.get("/auth/google",
  passport.authenticate('google', { scope: ["profile"] })
);

app.get("/auth/google/secrets",
  passport.authenticate('google', { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect to secrets.
    res.redirect("/secrets");
  });

app.get("/login", function(req, res){
  res.render("login");
});

app.get("/register", function(req, res){
  res.render("register");
});

app.get("/secrets", function(req, res){
  User.find({"secret": {$ne: null}}, function(err, foundUsers){
    if (err){
      console.log(err);
    } else {
      if (foundUsers) {
        res.render("secrets", {userWithSecrets: foundUsers});
      }
    }
  });
});

app.get("/submit", function(req, res){
  if (req.isAuthenticated()){
    res.render("submit");
  } else {
    res.redirect("/login");
  }
});

app.post("/submit", function(req, res){
  const submittedSecret = req.body.secret;

//Once the user is authenticated and their session gets saved, their user details are saved to req.user.
  // console.log(req.user.id);

  User.findById(req.user.id, function(err, foundUser){
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        foundUser.secret = submittedSecret;
        foundUser.save(function(){
          res.redirect("/secrets");
        });
      }
    }
  });
});

app.get("/logout", function(req, res){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect("/");
  });
});

app.post("/register", function(req, res){

  User.register({username: req.body.username}, req.body.password, function(err, user){
    if (err) {
      console.log(err);
      res.redirect("/register");
    } else {
      passport.authenticate("local")(req, res, function(){
        res.redirect("/secrets");
      });
    }
  });

});

app.post("/login", function(req, res){

  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  req.login(user, function(err){
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function(){
        res.redirect("/secrets");
      });
    }
  });

});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
///// END   *****   Authentication using passport.js   ***** END   /////

