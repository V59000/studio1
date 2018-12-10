// Write your JS here
import test from './script2.js';

console.log('test');

test();
var database = firebase.database();
var databaseRef = database.ref('/');

// Read the data from the database and take a snapshot of that data.
databaseRef.once('value').then(function(snapshot) {
 // Use .val() to get the data from the snapshot.
 const databaseValues = snapshot.val();
 console.log(databaseValues)
 //shows what is in your database
 //useful to manipulate data
 for (var key in databaseValues){
    $('body').append(databaseValues[key].name);
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