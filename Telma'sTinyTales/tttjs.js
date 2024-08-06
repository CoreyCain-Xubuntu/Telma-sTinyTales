--------------------------------------------------------DAILY TIP SECTION----------------------------------------------------------------

function displayTip() {
    const today = new Date();
    const day = today.getDay();
    const dailyTip = getDailyTip(day);

    document.getElementById('tipText').innerHTML = dailyTip;
    document.getElementById('tipBox').style.display = 'flex';
}

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

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('telmaTip').addEventListener('click', displayTip);
    document.getElementById('tipText').addEventListener('click', () => {
        document.getElementById('tipBox').style.display = 'none';
    });
});

--------------------------------------------------------FORM VALIDATION SECTION----------------------------------------------------------------
const userName = document.getElementById("myName");
const userEmail = document.getElementById("myEmail");
const userComments = document.getElementById("myComments");
const userZIP = document.getElementById('myzipCode');
const errorMessage = document.getElementById("error");
const verificationResult = document.getElementById('verificationResult');
const nameFormat = /^[a-zA-Z ,.'-]+$/;
const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validEmailRegex = /@.*\bgoogle\b/i;

function verifyForm() {
    validateName();
    validateZIP();
    validateEmail();
    validateComments();
}

function validateName() {
    if (!nameFormat.test(userName.value.trim())) {
        throw new Error("Please enter your name.");
    }
}

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

function validateEmail() {
    if (!emailFormat.test(userEmail.value.trim())) {
        throw new Error("Please enter a valid email.");
    } else if (validEmailRegex.test(userEmail.value.trim())) {
        throw new Error("Email cannot be a Google account.");
    }
}

function validateComments() {
    if (userComments.value.trim() === "") {
        throw new Error("Please add a comment.");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitButton').addEventListener('click', function(event) {
        try {
            verifyForm();
        } catch (error) {
            errorMessage.innerText = error.message;
            event.preventDefault();
        }
    });
});

--------------------------------------------------------MAP SECTION----------------------------------------------------------------

function initMap() {
    const mapElement = document.getElementById("map");
    const initialCoords = { lat: 35.18872063314348, lng: -101.84683965689786 };  
    const map = new google.maps.Map(mapElement, {
        zoom: 9,
        center: initialCoords,
        fullscreenControl: false
    });

    const marker = new google.maps.Marker({
        position: initialCoords,
        map: map,
        title: "Your current position"
    });

    function getUserPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }

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

    updateMapWithUserPosition();
}

--------------------------------------------------------GALLERY SECTION----------------------------------------------------------------
function initializeGallery() {
    const galleryImages = [
        { src: './images/Hammy.jpg', alt: 'A hamster in front of a green wheel.' },
        { src: './images/Minnie.jpg', alt: 'A dog with a treat in its mouth.' },
        { src: './images/Charlo.jpg', alt: 'A black cat.' },
        { src: './images/Chirp.jpg', alt: 'A cat sitting in a chair.' },
        { src: './images/DogEars.jpg', alt: 'A dog with bows on its ears.' },
        { src: './images/Fritz.jpg', alt: 'A cat under a christmas tree.' },
        { src: './images/Punky.jpg', alt: 'A black and white dog with a toy.' },
        { src: './images/All3.jpeg', alt: 'Three puppies lying down togther.' },
        { src: './images/BabyKittens.jpg', alt: 'Two kittens lying down with each other.' },
        { src: './images/Wolfie.jpg', alt: 'A dog with a baby doll in its mouth.' },
        { src: './images/TeeTee.jpg', alt: 'A white cat meowing.' },
        { src: './images/TilmaBee2.jpg', alt: 'A puppy in a bee costume.' },
        { src: './images/TilmaShoe.jpg', alt: 'A puppy looking into the camera.' },
        { src: './images/TilmaSock.jpg', alt: 'A puppy with a sock in its mouth.' },
        { src: './images/TinyTilma.jpg', alt: 'A puppy with a toy in its mouth.' },
        { src: './images/TilmaBee.jpg', alt: 'A puppy in a bee costume.' },
    ];
    
    const galleryContainer = document.getElementById('gallery');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
 
    galleryImages.forEach(image => {
        const img = document.createElement('img');
        img.className = 'thumbnail';
        img.src = image.src;
        img.alt = image.alt;
        img.width = 200;
        img.height = 150;
        img.addEventListener('click', () => {
            modalImage.src = image.src;
            modal.style.display = 'flex';
        });
        galleryContainer.appendChild(img);
    });

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeGallery();
});
