//*JS for the menu on mainyContainer's images*//
const images= [
    './img/picc2.jpg',
    './img/picc3.jpg',
    './img/picc4.jpg',
    './img/picc5.jpg',
    './img/picc1.jpeg'
];

let currentIndex= 0;

function changeBackgroundImage() {
    const container= document.querySelector('.mainyContainer');
    container.style.backgroundImage= `url(${images[currentIndex]})`;
    currentIndex= (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 5000); //This changes the images every 5 seconds
//*End of the JS for the menu on mainyContainer's images*//





/***Beginning of the web animations***/
//Check if the document is loaded, makes the animations from the view of the website happen
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin
      threshold: 0.1 // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              document.querySelectorAll('.lilfigartL').forEach(el => {
                  el.classList.add('visible');
                  el.classList.remove('memiH-l');
              });
              document.querySelectorAll('.lilfigartR').forEach(el => {
                  el.classList.add('visible');
                  el.classList.remove('memiH-r');
              });
          }
      });
  }, observerOptions);

  observer.observe(document.querySelector('section'));
});

/*//This one is for the MemiContainers//*/
/*Left*/
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              document.querySelectorAll('.memiBox50L').forEach(el => {
                  el.classList.add('visible');
                  el.classList.remove('memiH-l');
              });
          }
      });
  }, observerOptions);

  observer.observe(document.querySelector('.memicontainerL'));
});
/*Right*/
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              document.querySelectorAll('.memiBox50R').forEach(el => {
                  el.classList.add('visible');
                  el.classList.remove('memiH-r');
              });
          }
      });
  }, observerOptions);

  observer.observe(document.querySelector('.memicontainerR'));
});
/***End of the web animations***/





/////Buttons for the expanding divs on the web/////
// Get all button elements with the class 'buttonForDetails'
var expanders = document.querySelectorAll(".buttonForDetails");

// Loop through each button and add a click event listener
expanders.forEach(function(expander) {
  expander.addEventListener("click", function() {
    // Get the corresponding '.lilimg' element
    var lilimg = this.nextElementSibling;

    // Toggle the display property with animation
    if (lilimg.classList.contains("hide") || lilimg.style.display === "none" || lilimg.style.display === "") {
      lilimg.classList.remove("hide");
      lilimg.classList.add("show");
      lilimg.style.display = "block"; // Ensure it's visible
    } else {
      lilimg.classList.remove("show");
      lilimg.classList.add("hide");
      setTimeout(function() {
        lilimg.style.display = "none";
      }, 600); // Match the duration of the animation
    }
  });
});


// Add click event to redirect to the specified URL
let shoppingButton = document.getElementsByClassName('leMoreS')[0];
shoppingButton.addEventListener("click", function() {
    window.location.href = './services/index.html';
});
