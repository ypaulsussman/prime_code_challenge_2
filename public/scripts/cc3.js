console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  $( '#addJokeButton' ).on( 'click', function(){
    console.log( 'addJokeButton on click');
  }); // end addJokeButton on click
}); // end doc ready
