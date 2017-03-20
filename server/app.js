var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
// create 'urlEncodedParser' in case we want to inject it for post calls:
var urlEncodedParser = bodyParser.urlencoded( { extended: true } );
// use bodyParser.urlencoded throughout the app with this:
app.use( bodyParser.urlencoded( { extended: false } ) );

app.set("port", (process.env.PORT || 5000));

jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Twofish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog,",
    punchLine: "It was a shih tzu."
  }
];

app.get( '/', function( req, res ){
  // base url
  // console.log( 'base url hit' );
  res.sendFile( path.resolve( 'server/public/views/index.html' ) );
}); // end base url

app.use( express.static( 'server/public/' ) );

app.listen( app.get("port"), function(){
  console.log( 'server up on: ', app.get("port") );
}); // end spin up server

app.get('/allJokes', function(req, res) {
  // console.log('all jokes, yay!');
  res.send(jokes);
});

app.post('/addJoke', function(req, res) {
  // console.log("you've added the joke");
  // console.log(req.body);
  jokes.unshift(req.body);
  res.sendStatus(200);
});
