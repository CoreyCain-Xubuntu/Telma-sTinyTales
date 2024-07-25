// Function to display daily pet care tip
function displayTip() {
    const today = new Date();
    const day = today.getDay();
    const dailyTip = getDailyTip(day);

    document.getElementById('tipText').innerHTML = dailyTip;
    document.getElementById('tipBox').style.display = 'flex';
}

// Helper function to get daily tip based on day
function getDailyTip(day) {
    switch (day) {
        case 0:
            return "Always make sure your pet has clean water. Remember to check and fill their water bowl every day.";
        case 1:
            return "Stick to a regular feeding schedule for your pet. It's important not to give them too much food.";
        case 2:
            return "Spend time with your pet each day, whether it's playing fetch or just hanging out.";
        case 3:
            return "Show your pet some love by grooming them. Brush their fur and keep them clean.";
        case 4:
            return "Keep your home safe for your pet. Make sure things like toys or foods that can hurt them are out of reach.";
        case 5:
            return "Visit the vet regularly to make sure your pet is healthy. Vets help keep our pets happy and well.";
        case 6:
            return "If your pet goes outside, put a tag on their collar. It's like a name tag that keeps them safe.";
        default:
            return "Always remember to show love and patience to your pet. They are a part of your family.";
    }
}

// Event listener for displaying daily tip
document.getElementById('telmaTip').addEventListener('click', displayTip);

// Event listener for closing tip box
document.getElementById('tipText').addEventListener('click', () => {
    document.getElementById('tipBox').style.display = 'none';
});

// DOM elements
const userName = document.getElementById("myName");
const userEmail = document.getElementById("myEmail");
const userComments = document.getElementById("myComments");
const userZIP = document.getElementById('myzipCode');
const errorMessage = document.getElementById("error");
const verificationResult = document.getElementById('verificationResult');

// Regular expressions for validation
const nameFormat = /^[a-zA-Z ,.'-]+$/;
const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validEmailRegex = /@.*\bgoogle\b/i;

// Function to validate form inputs
function verifyForm() {
    validateName();
    validateZIP();
    validateEmail();
    validateComments();
}

// Function to validate name
function validateName() {
    if (!nameFormat.test(userName.value.trim())) {
        throw new Error("Please enter your name.");
    }
}

// Function to validate ZIP code
function validateZIP() {
    if (userZIP.value.trim().length < 5) {
        throw new Error("ZIP code must be at least 5 digits.");
    }

    const xhr = new XMLHttpRequest();
    const url = `https://api.zippopotam.us/US/${userZIP.value.trim()}`;

    xhr.open('GET', url, false);
    xhr.send();

    if (xhr.readyState === 4 && xhr.status === 200) {
        verificationResult.innerHTML = "";
    } else {
        verificationResult.innerHTML = 'ZIP code must be 5 numbers and valid.';
        throw new Error("Failed to validate ZIP code.");
    }
}

// Function to validate email
function validateEmail() {
    if (!emailFormat.test(userEmail.value.trim())) {
        throw new Error("Please enter a valid email.");
    } else if (validEmailRegex.test(userEmail.value.trim())) {
        throw new Error("Email cannot be a Google account.");
    }
}

// Function to validate comments
function validateComments() {
    if (userComments.value.trim() === "") {
        throw new Error("Please add a comment.");
    }
}

// Event listener for form submission
document.getElementById('submitButton').addEventListener('click', function(event) {
    try {
        verifyForm();
        } catch (error) {
        errorMessage.innerText = error.message;
        event.preventDefault();
    }
});

// Initialize map
function initMap() {
    const mapElement = document.getElementById("map");
    const initialCoords = { lat: 35.18872063314348, lng: -101.84683965689786 };  
    const map = new google.maps.Map(mapElement, {
        zoom: 9,
        center: initialCoords,
        fullscreenControl: false
    });

    // Initialize marker
    const marker = new google.maps.Marker({
        position: initialCoords,
        map: map,
        title: "Your current position"
    });

    // Get user's current position
    function getUserPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }

    // Update map and marker with user's position
    async function updateMapWithUserPosition() {
        try {
            const position = await getUserPosition();
            const { latitude, longitude, altitude } = position.coords;

            // Update map center and marker position
            map.setCenter({ lat: latitude, lng: longitude });
            marker.setPosition({ lat: latitude, lng: longitude });

            // Update UI elements with coordinates
            document.getElementById("latitude").textContent = `  ${latitude}`;
            document.getElementById("longitude").textContent = `  ${longitude}`;
            document.getElementById("altitude").textContent = `  ${altitude}`;
        } catch (error) {
            console.error("Error getting user position:", error);
        }
    }

    // Call updateMapWithUserPosition on init
    updateMapWithUserPosition();
}


