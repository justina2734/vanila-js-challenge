let images = [
     "24.jpeg",
     "21.jpeg",
     "3.jpeg",
     "4.jpeg",
     "22.jpeg",
     "11.jpeg",
     "14.jpeg",
     "15.jpeg",
     "17.jpeg",
     "18.jpeg",
     "19.jpeg",
];

console.log(images)

const chooseImages=images[Math.floor(Math.random()*images.length)];

const IuImage=document.createElement("img");

IuImage.src = `img/${chooseImages}`;

document.body.appendChild(IuImage);