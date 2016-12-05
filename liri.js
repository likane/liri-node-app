
var request = require("request");
var fs = require("fs");
var userCommand = process.argv[2];
var secondCommand = process.argv[3];

var tweet = "my-tweets";
var spot = "spotify-this-song";
var movie = "movie-this";
var doIt = "do-what-it-says";


function pullTweet() {
	var twitter = require("twitter");
	var twitterKey = require("./keys.js");

	var params = {screen_name: '@_LouisKane_'};
	twitterKey.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (!error) {
   		 console.log(tweets);
  		

  }

});

}

function pullSong() {
	var spotify = require("spotify");

			spotify.search({ type: 'track', query: secondCommand }, function(err, data) {
		    if ( err ) {
		        console.log('Error occurred: ' + err);
		        return;
		    } else {
		 		console.log(JSON.stringify(data));
		    }
		    
		});
}

function pullMovie() {

	request("http://www.omdbapi.com/?t=" +secondCommand + "&y=&plot=full&r=json", function(error, response, body){

	  	if (!error && response.statusCode === 200) {
	  		
	  		console.log("the movie's rating is: " + JSON.parse(body).omdbRating);
	  		console.log("the movie's title is: " + JSON.parse(body).Title);
	  		console.log("the movie's country is: " + JSON.parse(body).Country);
	  		console.log("the movie's Language is: " + JSON.parse(body).Language);
	  		console.log("the movie's Plot is: " + JSON.parse(body).Plot);

		}
     });
}

function pullIt() {
 	
 	fs.readFile("./random.txt", (error, data) {
 		if (err) throw err;
 		console.log(data);
 	
 	});
}


if (userCommand === tweet) {
	pullTweet();
} 

if (userCommand === spot) {
	pullSong();
}

if (userCommand === movie) {
	pullMovie();
}

if (userCommand === doIt) {
	pullIt();
}