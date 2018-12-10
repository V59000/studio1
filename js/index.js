// Write your JS here
import test from './script2.js';

console.log('test');

test();
var database = firebase.database();
var databaseRef = database.ref('/');

// Read the data from the database and take a snapshot of that data.
databaseRef.on('value',function(snapshot) {
 // Use .val() to get the data from the snapshot.
 const databaseValues = snapshot.val();
 console.log(databaseValues)
 //shows what is in your database
 //useful to manipulate data
 $("#results").empty();
 for (var key in databaseValues){
    var movieName = databaseValues[key].name;
    var movieGenre = databaseValues[key].genre;
    $('#results').append(
        "<div class='col-sm'><div class='card'><img class='card-image-top' src='http://www.website.com'><div class='card-body'><h5 class='card-title'>"+movieName+ "  "+"</h5><p>"+movieGenre+"</p></div></div></div>"
    );
 }

});
 
// 11-26-18
$('#button-addon').click(function(){
    var genreName=$('#genre').val();
    var movieName=$("#name").val()
    databaseRef.push({
        "name": movieName,
        "genre": genreName
    });
   // $("#genre").val()
   //clear text from input after button is pressed so no extra object is added
});