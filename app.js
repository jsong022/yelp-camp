//all the require() statements
var express     = require("express"),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

//set up app variable
var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


//set up mongoose stuff
mongoose.connect("mongodb://localhost/yelp-camp", {useMongoClient: true});
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});
var Campground = mongoose.model("Campground", campgroundSchema);

/*
//add a sample to the database
Campground.create(
  {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8491/8296644156_c60886ce08.jpg"},
  function(err, obj){
    if (err){
      console.log("Error while adding a new campground");
      console.log(err);
    } else{
      console.log("Adding a new camp to the databse:");
      console.log(obj);}});
//sample of camps following the campgroundSchema
  {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8491/8296644156_c60886ce08.jpg"}
  {name: "Granite Hill", image: "https://farm9.staticflickr.com/8206/8265812638_8100a96382.jpg"}
  {name: "Stardew Plains", image: "https://farm3.staticflickr.com/2888/9613885906_e271d89326.jpg"}
  {name: "Sandstone Lake", image: "https://farm9.staticflickr.com/8020/7538732802_49a42d28d2.jpg"}
  {name: "Bear Mountain", image: "https://farm8.staticflickr.com/7448/9662927256_9fcc19b9e8.jpg"}
  {name: "Canyon Peak", image: "https://farm6.staticflickr.com/5255/5571147697_295d6327e1.jpg"}
  {name: "Eagle Nest Park", image: "https://farm8.staticflickr.com/7516/28211128032_538751eefa.jpg"}
  {name: "Camp Riverland", image: "https://farm4.staticflickr.com/3831/12497870654_a04bf51e08.jpg"}
*/

//root route
app.get("/", function(req, res){
  res.render("home");
});

//all campgrounds
app.get("/campgrounds", function(req, res){
  //get all campgrounds from the databse
  Campground.find({}, function(err, camp){
    if (err){
      console.log("Error while looking for campgrounds");
      console.log(err);
    } else{
      res.render("campgrounds", {campgrounds: camp});
    }
  });
  //res.render("campgrounds", {campgrounds: campgrounds});
});

//new campground post
app.post("/campgrounds", function(req, res){
  //get data from input form
  var name = req.body.campName;
  var img = req.body.imageURL;
  //create new campground object based on the input
  var newCamp = {name: name, image: img};
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

//new campground input form
app.get("/campgrounds/new", function(req, res){
  res.render("new");
});

//start listening on env.PORT and env.IP (external environmental variables to protect keys and such)
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Yelp-Camp server listening...");
});