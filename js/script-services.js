//*JS for the menu on mainyContainer's images*//
const images= [
    '../img/img-services/pic2.jpg',
    '../img/img-services/pic3.jpg',
    '../img/img-services/pic4.jpg',
    '../img/img-services/pic1.jpg'
//    '../img/'
];

let currentIndex= 0;

function changeBackgroundImage() {
    const container= document.querySelector('.mainyContainer');
    container.style.backgroundImage= `url(${images[currentIndex]})`;
    currentIndex= (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 5000); //This changes the images every 5 seconds
//*End of the JS for the menu on mainyContainer's images*//


//Add click event to redirect to the specified URL//
let contactButtonComms = document.getElementsByClassName('commsButton')[0];
contactButtonComms.addEventListener("click", function() {
    window.location.href = '../contact_business/index.html';
});