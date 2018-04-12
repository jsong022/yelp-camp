var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");
 
var data = [
	{name: "Salmon Creek", image: "https://farm9.staticflickr.com/8491/8296644156_c60886ce08.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada a dui eget maximus. Nam tortor urna, placerat vel maximus sit amet, congue eget elit. Fusce eu sem sed lectus gravida pulvinar eget quis ante. Curabitur nisl eros, maximus vitae metus eget, tristique volutpat elit. Donec interdum massa nec vulputate posuere. Vestibulum luctus libero vitae aliquet accumsan. Nulla et arcu tincidunt turpis porta convallis. Ut facilisis sollicitudin urna at lobortis. Suspendisse potenti. Sed interdum ante eget nisl congue lacinia. Praesent vel lacus ac sapien laoreet facilisis. Cras rutrum pretium elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed efficitur lectus, a sodales est. Aliquam vel laoreet ante. Praesent at velit quis dolor suscipit porttitor ut faucibus diam."},
	{name: "Granite Hill", image: "https://farm9.staticflickr.com/8206/8265812638_8100a96382.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada a dui eget maximus. Nam tortor urna, placerat vel maximus sit amet, congue eget elit. Fusce eu sem sed lectus gravida pulvinar eget quis ante. Curabitur nisl eros, maximus vitae metus eget, tristique volutpat elit. Donec interdum massa nec vulputate posuere. Vestibulum luctus libero vitae aliquet accumsan. Nulla et arcu tincidunt turpis porta convallis. Ut facilisis sollicitudin urna at lobortis. Suspendisse potenti. Sed interdum ante eget nisl congue lacinia. Praesent vel lacus ac sapien laoreet facilisis. Cras rutrum pretium elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed efficitur lectus, a sodales est. Aliquam vel laoreet ante. Praesent at velit quis dolor suscipit porttitor ut faucibus diam."},
	{name: "Stardew Plains", image: "https://farm3.staticflickr.com/2888/9613885906_e271d89326.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada a dui eget maximus. Nam tortor urna, placerat vel maximus sit amet, congue eget elit. Fusce eu sem sed lectus gravida pulvinar eget quis ante. Curabitur nisl eros, maximus vitae metus eget, tristique volutpat elit. Donec interdum massa nec vulputate posuere. Vestibulum luctus libero vitae aliquet accumsan. Nulla et arcu tincidunt turpis porta convallis. Ut facilisis sollicitudin urna at lobortis. Suspendisse potenti. Sed interdum ante eget nisl congue lacinia. Praesent vel lacus ac sapien laoreet facilisis. Cras rutrum pretium elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed efficitur lectus, a sodales est. Aliquam vel laoreet ante. Praesent at velit quis dolor suscipit porttitor ut faucibus diam."},
	{name: "Sandstone Lake", image: "https://farm9.staticflickr.com/8020/7538732802_49a42d28d2.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada a dui eget maximus. Nam tortor urna, placerat vel maximus sit amet, congue eget elit. Fusce eu sem sed lectus gravida pulvinar eget quis ante. Curabitur nisl eros, maximus vitae metus eget, tristique volutpat elit. Donec interdum massa nec vulputate posuere. Vestibulum luctus libero vitae aliquet accumsan. Nulla et arcu tincidunt turpis porta convallis. Ut facilisis sollicitudin urna at lobortis. Suspendisse potenti. Sed interdum ante eget nisl congue lacinia. Praesent vel lacus ac sapien laoreet facilisis. Cras rutrum pretium elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed efficitur lectus, a sodales est. Aliquam vel laoreet ante. Praesent at velit quis dolor suscipit porttitor ut faucibus diam."},
	{name: "Bear Mountain", image: "https://farm8.staticflickr.com/7448/9662927256_9fcc19b9e8.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada a dui eget maximus. Nam tortor urna, placerat vel maximus sit amet, congue eget elit. Fusce eu sem sed lectus gravida pulvinar eget quis ante. Curabitur nisl eros, maximus vitae metus eget, tristique volutpat elit. Donec interdum massa nec vulputate posuere. Vestibulum luctus libero vitae aliquet accumsan. Nulla et arcu tincidunt turpis porta convallis. Ut facilisis sollicitudin urna at lobortis. Suspendisse potenti. Sed interdum ante eget nisl congue lacinia. Praesent vel lacus ac sapien laoreet facilisis. Cras rutrum pretium elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed efficitur lectus, a sodales est. Aliquam vel laoreet ante. Praesent at velit quis dolor suscipit porttitor ut faucibus diam."},
	{name: "Canyon Peak", image: "https://farm6.staticflickr.com/5255/5571147697_295d6327e1.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada a dui eget maximus. Nam tortor urna, placerat vel maximus sit amet, congue eget elit. Fusce eu sem sed lectus gravida pulvinar eget quis ante. Curabitur nisl eros, maximus vitae metus eget, tristique volutpat elit. Donec interdum massa nec vulputate posuere. Vestibulum luctus libero vitae aliquet accumsan. Nulla et arcu tincidunt turpis porta convallis. Ut facilisis sollicitudin urna at lobortis. Suspendisse potenti. Sed interdum ante eget nisl congue lacinia. Praesent vel lacus ac sapien laoreet facilisis. Cras rutrum pretium elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed efficitur lectus, a sodales est. Aliquam vel laoreet ante. Praesent at velit quis dolor suscipit porttitor ut faucibus diam."},
	{name: "Eagle Nest Park", image: "https://farm8.staticflickr.com/7516/28211128032_538751eefa.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada a dui eget maximus. Nam tortor urna, placerat vel maximus sit amet, congue eget elit. Fusce eu sem sed lectus gravida pulvinar eget quis ante. Curabitur nisl eros, maximus vitae metus eget, tristique volutpat elit. Donec interdum massa nec vulputate posuere. Vestibulum luctus libero vitae aliquet accumsan. Nulla et arcu tincidunt turpis porta convallis. Ut facilisis sollicitudin urna at lobortis. Suspendisse potenti. Sed interdum ante eget nisl congue lacinia. Praesent vel lacus ac sapien laoreet facilisis. Cras rutrum pretium elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed efficitur lectus, a sodales est. Aliquam vel laoreet ante. Praesent at velit quis dolor suscipit porttitor ut faucibus diam."},
	{name: "Camp Riverland", image: "https://farm4.staticflickr.com/3831/12497870654_a04bf51e08.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada a dui eget maximus. Nam tortor urna, placerat vel maximus sit amet, congue eget elit. Fusce eu sem sed lectus gravida pulvinar eget quis ante. Curabitur nisl eros, maximus vitae metus eget, tristique volutpat elit. Donec interdum massa nec vulputate posuere. Vestibulum luctus libero vitae aliquet accumsan. Nulla et arcu tincidunt turpis porta convallis. Ut facilisis sollicitudin urna at lobortis. Suspendisse potenti. Sed interdum ante eget nisl congue lacinia. Praesent vel lacus ac sapien laoreet facilisis. Cras rutrum pretium elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed efficitur lectus, a sodales est. Aliquam vel laoreet ante. Praesent at velit quis dolor suscipit porttitor ut faucibus diam."}
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
          //add Sample Comment 1
          Comment.create(
            { text: "Lorem ipsum dolor sit amet, " + campground.name +" consectetur adipiscing elit. Phasellus auctor id risus facilisis gravida. Aliquam erat volutpat. Aenean efficitur ultricies augue, posuere condimentum tortor rhoncus.",
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
}
module.exports = seedDB;