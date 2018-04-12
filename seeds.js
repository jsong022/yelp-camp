var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");
 
var data = [
	{name: "Salmon Creek", image: "https://farm9.staticflickr.com/8491/8296644156_c60886ce08.jpg", description: "A beautiful campground by a river"},
	{name: "Granite Hill", image: "https://farm9.staticflickr.com/8206/8265812638_8100a96382.jpg", description: "A beautiful campground by a river"},
	{name: "Stardew Plains", image: "https://farm3.staticflickr.com/2888/9613885906_e271d89326.jpg", description: "A beautiful campground by a river"},
	{name: "Sandstone Lake", image: "https://farm9.staticflickr.com/8020/7538732802_49a42d28d2.jpg", description: "A beautiful campground by a river"},
	{name: "Bear Mountain", image: "https://farm8.staticflickr.com/7448/9662927256_9fcc19b9e8.jpg", description: "A beautiful campground by a river"},
	{name: "Canyon Peak", image: "https://farm6.staticflickr.com/5255/5571147697_295d6327e1.jpg", description: "A beautiful campground by a river"},
	{name: "Eagle Nest Park", image: "https://farm8.staticflickr.com/7516/28211128032_538751eefa.jpg", description: "A beautiful campground by a river"},
	{name: "Camp Riverland", image: "https://farm4.staticflickr.com/3831/12497870654_a04bf51e08.jpg", description: "A beautiful campground by a river"}
]
 
function seedDB(){
  //Remove all campgrounds
  Campground.remove({}, function(err){
    if(err){ console.log(err);}
    console.log("removed campgrounds!");
    Comment.remove({}, function(err) {
      if(err){ console.log(err);}
      console.log("removed comments!");
    
      //add a few campgrounds
      data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
          if(err){ console.log(err);}
          console.log("added a campground");
          //create a comment
          Comment.create(
              { text: "This is the test comment wow!",
                author: "Jay"},
              function(err, comment){
                if(err){ console.log(err);}
                else {
                  campground.comments.push(comment);
                  campground.save();
                  console.log("Created new comment");
                }
              }
            );
          });
        });
      });
  });
  //add a few comments
}
module.exports = seedDB;