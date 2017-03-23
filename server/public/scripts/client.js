// console.log( 'js' );

$( document ).ready( function(){
  // console.log( 'JQ' );
  getAllJokes();

  $( '#addJokeButton' ).on( 'click', function(){
    // console.log( 'addJokeButton on click');
    var newJoke = {
      whoseJoke: $('#whoseJokeIn').val(),
      jokeQuestion: $('#questionIn').val(),
      punchLine: $('#punchlineIn').val(),
    };
    $.ajax({
      type: 'POST',
      url: '/addJoke',
      data: newJoke,
      success: function (response) {
        getAllJokes();
        $('#whoseJokeIn').val('');
        $('#questionIn').val('');
        $('#punchlineIn').val('');
      }
    });
  }); // end addJokeButton on click

  $('#outputDiv').on('mouseenter', '.punchline', function() {
    // console.log("seen the joke");
    $(this).append('<img src="views/the_awful_truth.jpg" alt="these jokes rank a solid AngryKanye out of 10">');
  });


}); // end doc ready

function getAllJokes() {
  $.ajax({
    type: 'GET',
    url: '/allJokes',
    success: function(response) {
      // // console.log("now we got the jokes!");
      // console.log(response);
      showAllJokes(response);
    }
  });
}

function showAllJokes(jokes) {
  // console.log("showAllJokes is running");
  $("#outputDiv").empty();
  for (var i = 0; i < jokes.length; i++) {
    $("#outputDiv").append("<h3>" + jokes[i].whoseJoke + " says:  '" + jokes[i].jokeQuestion + "'</h3>" +
    "<h3>...</h3><h3>...</h3><h3>...</h3><div class='punchline'><h3>" + jokes[i].punchLine + "</h3> </div> <br> <br>");
    }
}
