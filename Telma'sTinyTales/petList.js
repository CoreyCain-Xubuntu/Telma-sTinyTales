class Pet {
    constructor(alt, imageSrc, greeting) {
        this.alt = alt;
        this.imageSrc = imageSrc;
        this.greeting = greeting;
    }

    createPet() {
        let pet = document.createElement('li');

        let image = document.createElement('img');
        image.classList.add('thumbnail3');
        image.src = this.imageSrc;
        image.alt = this.alt;
        pet.appendChild(image);

        let heading = document.createElement('h1');
        heading.textContent = this.greeting;
        pet.appendChild(heading);

        return pet;
    }
}

let pets = [
    new Pet('Two kittens lying down with each other', './images/BabyKittens.jpg', 'Hello, my name is Whiskers and I like to protect my baby brother because he is so tiny.'),
    new Pet('A black kitten', './images/Charlo.jpg', 'My name is Charlie and I am always trying to be as mischievous as possible.'),
    new Pet('A cat sitting in a chair', './images/Chirp.jpg', 'Hi! My name is Chirp. I was born missing a hind leg but I have never let it slow me down or make me sad.'),
    new Pet('A white kitten meowing', './images/TeeTee.jpg', 'Hi there! My name is TeeTee and I can never get enough love or attention.'),
    new Pet('A cat under a Christmas tree', './images/Fritz.jpg', 'It is nice to meet you. My name is Fritz. I love to play with the lights and ornaments on the Christmas tree every year.'),
    new Pet('A puppy with a pink collar on', './images/BabyTilma.jpg', 'Hi! My name is Telma. I have lots of tiny friends. I am a chihuahua puppy and my favorite things are playing with my toys and being loved.'),
    new Pet('A white dog looking through a fence', './images/Wolfie.jpg', 'It is nice to meet you! My name is Wolfie and I am a deaf pit bull dog. I watch peoples hands so that I know what they are saying. My favorite toys are baby dolls.'),
    new Pet('A black and white dog lying on a toy', './images/Punky.jpg', 'Hi! My name is Punky Chewster but all my friends call me Punky. I am a chihuahua dog who likes to spend all day playing with toys and friends.'),
    new Pet('A dog with bows on her ears', './images/DogEars.jpg', 'Hi there! My name is Biscuit. I am a german shepard dog. My favorite things are going on walks and getting treats.'),
    new Pet('A dog with a treat in it her mouth', './images/Minnie.jpg', 'Hello! My name is Minnie. I am a chihuahua dog with short brown hair. I love to go outside and play with my friends.')
];

let puppyList = document.getElementById('puppyList');
let kittenList = document.getElementById('kittenList');

pets.forEach(pet => {
    let petElement = pet.createPet();
    let petCategory = getCategory(pet.alt);

    switch (petCategory) {
        case 'kitten':
        case 'kittens':
        case 'cat':
        case 'cats':
            if (kittenList) {
                kittenList.appendChild(petElement);
            }
            break;
        case 'puppy':
        case 'puppies':
        case 'dog':
        case 'dogs':
            if (puppyList) {
                puppyList.appendChild(petElement);
            }
            break;
        default:
            break;
    }
});

function getCategory(altText) {
    let lowerAlt = altText.toLowerCase();
    let kittenRegex = /\bkitten(s)?\b|\bcat(s)?\b/;
    let puppyRegex = /\bpuppy(ies)?\b|\bdog(s)?\b/;

    if (kittenRegex.test(lowerAlt)) {
        return 'kitten';
    } else if (puppyRegex.test(lowerAlt)) {
        return 'puppy';
    } else {
        return '';
    }
}
