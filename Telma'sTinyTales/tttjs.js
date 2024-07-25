
/* PURPOSE OF SCRIPT - I have added the following script that uses a series of "if and else-if" statements to generate a pet care tip based on the current day. 
This will function as a clickable button available on every page. When clicked the button will populate a daily tip based on the day of the week. 
When clicked again, the tip will dissapear so that the visual integrity of the webpage remains intact. I have added "tipText", "tipBox", and "telmaTip" into the HTMl 
of every page as div sections and a button respectively. I have also added the script to the head of each page to defer load "ttt.js"  */

/* By assigning "telmaTip" as a button in HTML I can then add an Event Listener assigned to "telmaTip". This Event Listener will initiate the if and else-if statements 
if the button is clicked. */
document.getElementById('telmaTip').addEventListener('click', function displayTip() {

    /* By using built in javascript functions I can use new Date() to assign todays date to a variable called "today".
    I can then use today.getDay() to assign the variable called "day" as an integer based on the information that Date() assigns to "today".
    Declaring the variable "dailyTip" as an empty string ensures that a message can be populated based on the "day" variable. */
    var today = new Date();
    var day = today.getDay();
    var dailyTip = "";

    /* The following if and else-if statements cycle thru the number assigned to "day" and display a message based on the matching number. */
    if (day === 0) {
        dailyTip = "Always make sure your pet has clean water. Remember to check and fill their water bowl every day.";
    } else if (day === 1) {
        dailyTip = "Stick to a regular feeding schedule for your pet. It's important not to give them too much food.";
    } else if (day === 2) {
        dailyTip = "Spend time with your pet each day, whether it's playing fetch or just hanging out.";
    } else if (day === 3) {
        dailyTip = "Show your pet some love by grooming them. Brush their fur and keep them clean.";
    } else if (day === 4) {
        dailyTip = "Keep your home safe for your pet. Make sure things like toys or foods that can hurt them are out of reach.";
    } else if (day === 5) {
        dailyTip = "Visit the vet regularly to make sure your pet is healthy. Vets help keep our pets happy and well.";
    } else if (day === 6) {
        dailyTip = "If your pet goes outside, put a tag on their collar. It's like a name tag that keeps them safe.";
    }

    /* The message assigned to "dailyTip" is added to the webpage using "tipText" as the ID in the HTML.
    The "tipBox" ID is being used in HTML to display the text box on the page.*/
    document.getElementById('tipText').innerHTML = dailyTip;
    document.getElementById('tipBox').style.display = 'flex';
});

/* By adding an Event Listener that is tied to "tipText" I can run closeTip() when the "tipText" box is clicked.
The "tipBox" ID is being used in HTML to delete the text box on the page*/
document.getElementById('tipText').addEventListener('click', function closeTip() {
    document.getElementById('tipBox').style.display = 'none';
});

/*------------------------------------------------FORM VALIDATION------------------------------------------------*/

/* PURPOSE OF SCRIPT - To enforce form validation using javascript. This will ensure that the required fields in the form match a certain format.
 When the submit button is clicked, a try-catch statement will run the verifyForm function. This function will use a series of "if and else-if" 
 statements to test each field for the correct format provided. If all of the fields match the provided format, the form is submitted.
 If any field does not match the provided format, the function will throw an error message based on the invalid field and the form will not be submitted.   */

/* By declaring the following variables, I can use the assigned HTML elements in javascript. */
let submit = document.getElementById("submit");
let userName = document.getElementById("myName");
let userEmail = document.getElementById("myEmail");
let userComments = document.getElementById("myComments");
let errorMessage = document.getElementById("error");

let userZIP = document.getElementById('myzipCode');                       /* NEW ADDITION CASE PROJECT 7 - Added the 'userZIP' variable using the HTML element ID. */
let verificationResult = document.getElementById('verificationResult'); /* NEW ADDITION CASE PROJECT 7 - Added the 'verificationResult' variable using the HTML element ID. */

/* By declaring the following variables as regular expressions (regex), for name and email validation, I can choose a format that must be matched by the user. */
let nameFormat = /^[a-zA-Z ,.'-]+$/;
let emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let validEmail = /@.*\bgoogle\b/i; /* Declared this variable as a regular expression (regex) to match a keyword regardless of case type. */

/*  This function uses a series of "if and else-if" statements to validate the values of the userName and userEmail variables against nameFormat
   and emailFormat, respectively. It throws an error message if they do not match the expected formats. Additionally, it checks if userComments is
   blank and throws an error message if true. */
function verifyForm() {
    if (!nameFormat.test(userName.value)) {
        throw "Please enter a valid name.";

    } else if (!verifyZIP()) {                   /* NEW ADDITION - CASE PROJECT 7 - Added an 'else-if' statement to handle the error if verifyZIP() returns false. */
        throw "Please enter a valid ZIP code."
    }
    else if (!emailFormat.test(userEmail.value)) {
        throw "Please enter a valid email.";
        // } else if (validEmail.test(userEmail.value)) { /* Instead of creating a new function to validate the email, I added it to the existing verifyForm() function. */
        //     throw "Email cannot be a google account."; /* This would simplify the code and achieve the same outcome. */
    } else if (userComments.value === "") {
        throw "Please add a comment.";

    }
}
function verifyEmail() { /* This function uses an "if" statement to validate the value of the userName variable against the 'validEmail' regex variable. */
    if (validEmail.test(userEmail.value)) { /*It throws an error message if it matches the expected format. */
        throw "Email cannot be a google account.";
    }
}

/*------------------------------------------------NEW ADDITION - CASE PROJECT 7------------------------------------------------*/

function verifyZIP() {  /* This function uses an "if-else" statement to validate the userZIP variable using an API. */

    if (userZIP.value.length >= 5) { /* Checks that the 'userZIP' variable is at least 5 numbers long. */

        const xhr = new XMLHttpRequest(); /* Created the constant 'xhr' as a new XMLHttpRequest object. */

        const url = `https://api.zippopotam.us/US/${userZIP.value}`; /* Created the constant 'url' as the URL for the API that will use the 'userZIP' value for validation. */

        xhr.open('GET', url, true); /* Used the open() method to 'GET' a request from the 'url' constant. The third parameter of 'true' signals an asynchronous request. */

        xhr.onreadystatechange = function () { /* Added an event listener to 'xhr' that runs an anonymous function when the 'readyState' is changed. */

            if (xhr.readyState === 4 && xhr.status === 200) { /* Created an 'if-else' statement that checks if the XMLHttpRequest is complete(4) and successful(200). */

                verificationResult.innerHTML = 'ZIP code validated.'; /* If the request is complete and successful then 'verificationResult' text is changed. */
            }
        };
        xhr.send(); /* If the request is complete and successful then the 'xhr' variable request is sent to the server. */

        return true; /* If the request is complete and successful then the validation is true. */

    } else {
        verificationResult.innerHTML = 'ZIP code must be 5 numbers and valid.'; /* Else if the request is not complete and successful then 'verificationResult' text is changed. */

        return false; /* If the request is not complete and successful then the validation is false. */
    }
}


/* The eventListener has been added to run a try-catch statement when the submit button is clicked. It will run the verifyEmail(), verifyForm(), and VerifyZIP() functions and will submit the form 
if no errors are thrown. If an error is thrown, the error message will appear above the form and the form will not be submitted. */
document.getElementById('submitButton').addEventListener('click', async function (event) {
    try {
        verifyZIP(); /* NEW ADDITION - CASE PROJECT 7 */ /* Added the 'verifyZIP() function to the try-catch statement. */
        verifyEmail();
        verifyForm();


    } catch (error) {
        let errorMessage = document.getElementById("error");
        errorMessage.innerText = error;
        event.preventDefault();
    }
});

/*------------------------------------------------GOOGLE API------------------------------------------------*/

/* PURPOSE OF SCRIPT - To initialize a map using Google Maps API, display the user's current position, 
    and update the map and information when the user's geolocation is obtained. */

function initMap() { /* This function initializes the map. */

    let displayMap = document.getElementById("map"); /* Sets the 'displayMap' variable to the HTML 'map' element. */

    let telmasPlace = { lat: 35.18872063314348, lng: -101.84683965689786 }; /* Sets the 'telmasPlace variable with the initial starting location. */

    let myMap = new google.maps.Map(displayMap, { /* Sets the 'myMap' variable as a new Google map using 'telmasPlace' as the center point with an initial zoom and fullscreenControl disabled. */
        zoom: 9,
        center: telmasPlace,
        fullscreenControl: false
    });

    let marker = new google.maps.Marker({ /* Sets the 'marker' variable as a new Google map marker using 'telmasPlace' as the position on 'myMap' with a customizable title. */
        position: telmasPlace,
        map: myMap,
        title: "Your current position"
    });

    navigator.geolocation.getCurrentPosition(getPos, handleError); /* Gets the current location using the getCurrentposition() method. This will also run the 'handleError' function if any errors occur. */

    function getPos(pos) { /* This function retrieves the users poistion. */

        let myPosition = { /* Sets the 'myPosition' variable using 'lat', 'lng', and 'alt' as the attributes. */
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
            alt: pos.coords.altitude,
        }

        myMap.setCenter({ lat: myPosition.lat, lng: myPosition.lng }); /* Updates the 'myMap' variable to set the users location as the center of the map using the setCenter() method. */
        marker.setPosition({ lat: myPosition.lat, lng: myPosition.lng }); /* Updates the 'marker' variable to set the users location as a marker on the map using the setPosition() method. */

        document.getElementById("latitude").textContent = "  " + myPosition.lat; /* Updates the 'latitude', 'longitude' and 'altitude' HTML elements to show the users location on the webpage. */
        document.getElementById("longitude").textContent = "  " + myPosition.lng;
        document.getElementById("altitude").textContent = "  " + myPosition.alt;
    }

    function handleError(err) { /* This function will handle any geolocation errors and display them to the console. */
        console.log("Geolocation error: " + err.message);
    }
}


