console.log( 'js' );

function readyNow() {

 $('#requestButton').on('click', makeGetRequest)

 $.ajax({
     type: 'GET',
     url: '/',
     success: function (res) {
         console.log("ON LOAD");
     }
 });
}


function makeGetRequest() {
    console.log('inside makeGetRequest'); 
    $.ajax({
        type: 'GET',
        url: '/dead',
        success: function (res) {
            console.log("meow");
        }
  
    });
}

$(document).ready(readyNow);
