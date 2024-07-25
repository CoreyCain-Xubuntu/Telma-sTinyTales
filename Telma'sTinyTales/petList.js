class Pet {  /* Created a class named 'Pet' that will represent different pets. */

    constructor(alt, imageSrc, greeting) { /* This constructor sets the 'alt', 'imageSrc', and 'greeting' properties for the 'Pet' class. */
        this.alt = alt;
        this.imageSrc = imageSrc;
        this.greeting = greeting;
    }

    createPet() { /* Created a method called createPet(). The purpose of this method is to populate the HTML with a list item that represents each 'Pet' */

        let pet = document.createElement('li'); /* Created the variable 'pet' as a 'li' element in the HTML. */

        let image = document.createElement('img'); /* Created the variable 'image' as an 'img' element in the HTML. */
        image.classList.add('thumbnail3'); /* Sets the CSS class 'thumbnail3' for the 'image' variable using the add() method.*/
        image.src = this.imageSrc; /* Sets the 'imageSrc' property for the 'image' variable. */
        image.alt = this.alt; /* Sets the 'alt' property for the 'image' variable. */
        pet.appendChild(image); /* Adds the 'image' variable to the 'pet' element. */

        let heading = document.createElement('h1'); /* Created the variable 'heading' as an 'h1' element in the HTML. */
        heading.innerHTML = this.greeting; /* Assigns the 'greeting' property as the inner HTML of the 'heading' element.. */
        pet.appendChild(heading); /* Adds the 'heading' variable to the 'pet' element. */

        return pet; /* Returns the 'pet' variable. */
    }
}

/* Created instances new pets using the 'Pet' class. */
kittens = new Pet('Two kittens lying down with each other', './images/BabyKittens.jpg', 'Hi! My name is Telma. I have lots of tiny friends. I am a chihuahua puppy and my favorite things are playing with my toys and being loved.');
charlo = new Pet('A black kitten', './images/Charlo.jpg', 'I am a chihuahua and my favorite things are playing with my toys and being loved.');
chirp = new Pet('A cat sitting in a chair', './images/Chirp.jpg', 'Hi! My name is Telma. I have lots of tiny friends. I am a chihuahua puppy and my favorite things are playing with my toys and being loved.');
teetee = new Pet('A white kitten meowing', './images/TeeTee.jpg', 'Hi! My name is Telma. I have lots of tiny friends. I am a chihuahua puppy and my favorite things are playing with my toys and being loved.');
fritz = new Pet('A cat under a Christmas tree', './images/Fritz.jpg', 'Hi! My name is Telma. I have lots of tiny friends. I am a chihuahua puppy and my favorite things are playing with my toys and being loved.');
tilma = new Pet('A puppy with a pink collar on', './images/BabyTilma.jpg', 'Hi! My name is Telma. I have lots of tiny friends. I am a chihuahua puppy and my favorite things are playing with my toys and being loved.');
wolfie = new Pet('A white dog looking through a fence', './images/Wolfie.jpg', 'It is nice to meet you! My name is Wolfie and I am a deaf pit bull dog. I watch peoples hands so that I know what they are saying. My favorite toys are baby dolls.');
punky = new Pet('A black and white dog lying on a toy', './images/Punky.jpg', 'Hi! My name is Punky Chewster but all my friends call me Punky. I am a chihuahua dog who likes to spend all day playing with toys and friends.');
biscuit = new Pet('A dog with bows on her ears', './images/DogEars.jpg', 'Hi there! My name is Biscuit. I am a german shepard dog. My favorite things are going on walks and getting treats.');
minnie = new Pet('A dog with a treat in it her mouth', './images/Minnie.jpg', 'Hello! My name is Minnie. I am a chihuahua dog with short brown hair. I love to go outside and play with my friends.');


let puppyList = document.getElementById('puppyList'); /* Created the variable 'puppyList' as a 'ul' element named 'puppyList' in the HTML. */
let kittenList = document.getElementById('kittenList'); /* Created the variable 'kittenList' as a 'ul' element named 'kittenList' in the HTML. */

/* Added the created instances of new pets to the 'kittenList' and 'puppyList' elements using the createPet() method. */
try {
    puppyList.appendChild(tilma.createPet());
    puppyList.appendChild(wolfie.createPet());
    puppyList.appendChild(punky.createPet());
    puppyList.appendChild(biscuit.createPet());
    puppyList.appendChild(minnie.createPet());
} catch { }

try {
    kittenList.appendChild(charlo.createPet());
    kittenList.appendChild(chirp.createPet());
    kittenList.appendChild(teetee.createPet());
    kittenList.appendChild(fritz.createPet());
    kittenList.appendChild(kittens.createPet());
} catch { }

