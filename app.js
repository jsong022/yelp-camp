//all the require() statements
var express     = require("express"),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    seedDB      = require("./seeds.js"),
    //different model schema definitions
    Campground  = require("./models/campground.js"),
    Comment     = require("./models/comment.js"),
    User        = require("./models/user.js");

//set up app variable
var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//set up mongoose stuff
mongoose.connect("mongodb://localhost/yelp-camp");

//seed the database using seeds.js
//seedDB();

//root route
app.get("/", function(req, res){
  res.render("home");
});

/*=====================
CAMPGROUNDS ROUTES
=======================*/

//INDEX - list of all campgrounds
app.get("/campgrounds", function(req, res){
  //get all campgrounds from the databse
  Campground.find({}, function(err, camp){
    if (err){
      console.log("Error while looking for campgrounds");
      console.log(err);
    } else{
      res.render("campgrounds/index", {campgrounds: camp});
    }
  });
});

//CREATE - POST new campground to add to database
app.post("/campgrounds", function(req, res){
  //get data from input form
  var name = req.body.campName;
  var img = req.body.imageURL;
  var desc = req.body.campDesc;
  //create new campground object based on the input
  var newCamp = {name: name, image: img, description: desc};
  //add it to the database
  Campground.create(newCamp, function(err, camp){
    if (err){
      console.log("Error while adding a new campground");
      console.log(err);
    } else{
      console.log("Added a new camp to the databse");
      console.log(camp);
      //redirect to /campgrounds
      res.redirect("/campgrounds");
    }
  });
});

//NEW - new campground input form
app.get("/campgrounds/new", function(req, res){
  res.render("campgrounds/new");
});

//SHOW - infor about a single campground
app.get("/campgrounds/:id", function(req, res){
  //find the camp with the given ID
  Campground.findById(req.params.id).populate("comments").exec(function(err, camp){
    if (err){ //error handling
      console.log("Error while looking for the campground by ID");
      console.log(err);
    } else { //render the show EJS template with info about that campground
      console.log("Showing Campground");
      console.log(camp);
      res.render("campgrounds/show", {campground: camp});
    }
  });
});

/*=====================
CAMPGROUNDS ROUTES
=======================*/

//NEW - new comment input form
app.get("/campgrounds/:id/comments/new", function(req, res){
  Campground.findById(req.params.id, function(err, camp){
    if (err){
      console.log("Error while looking for Campground by ID");
      console.log(err);
    } else {
      res.render("comments/new", {campground: camp});
    }
  });
});

//CREATE - POST new campground to add to database
app.post("/campgrounds/:id/comments", function(req, res){
  Campground.findById(req.params.id, function(err, camp){
    if (err){
      console.log("Error while looking for Campground by ID");
      console.log(err);
      res.redirect("/campgrounds");
    } else {
      Comment.create(req.body.comment, function(err, comment){
        if (err){
          console.log("Error while adding a new comment");
          console.log(err);
          res.redirect("/campgrounds/"+camp._id);
        } else {
          camp.comments.push(comment);
          camp.save();
          res.redirect("/campgrounds/"+camp._id);
        }
      });
    }
  });
});

//start listening on env.PORT and env.IP (external environmental variables to protect keys and such)
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Yelp-Camp server listening...");
});