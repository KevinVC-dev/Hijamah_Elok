//*JS for the menu on nav bar*//
document.addEventListener("DOMContentLoaded", function() {
    const menuForMemi= document.querySelector(".menuForMemi");
    const options= document.querySelectorAll(".option1, .option2, .option3, .sendWA, .usersGuide, .everyButton");

    menuForMemi.addEventListener("click", function() {
        options.forEach(option=> {
            if (option.classList.contains("notVisibleMenu")) {
                option.classList.remove("notVisibleMenu");
                option.classList.add("nowVisibleMenu");
                option.style.display= 'flex'; //Ensure it's displayed
            } else {
                option.classList.remove("nowVisibleMenu");
                option.classList.add("notVisibleMenu");

                //Ensure the element is hidden after the fade-out animation
                option.addEventListener('animationend', function() {
                    if (option.classList.contains("notVisibleMenu")) {
                        option.style.display= 'none';
                    }
                }, {once: true});
            }
        });
    });
});
//*End of the JS for the menu on nav bar*//


//Check if the document is loaded, makes the animations from the view of the website happen
document.addEventListener('DOMContentLoaded', function() {
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
      } //else {document.querySelectorAll('.lilfigartL').forEach(el => {
      //         el.classList.add('memiH-l');
      //         el.classList.remove('visible');
      //   });
      //         document.querySelectorAll('.lilfigartR').forEach(el => {
      //           el.classList.add('memiH-r');
      //           el.classList.remove('visible');
      //   });
      // }
    });
  });

  observer.observe(document.querySelector('section'));
});

/*//This one is for the MemiContainers//*/
/*Left*/
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.memiBox50L').forEach(el => {
          el.classList.add('visible');
          el.classList.remove('memiH-l');
        });
      }
    });
  });

  observer.observe(document.querySelector('.memicontainerL'));
});
/*Right*/
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.memiBox50R').forEach(el => {
          el.classList.add('visible');
          el.classList.remove('memiH-r');
        });
      }
    });
  });

  observer.observe(document.querySelector('.memicontainerR'));
});






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


/**Button to go top**/
//Get the button
let backToTopBtn= document.getElementById("backToTopBtn");

//When the user scrolls down 20px from the top of the document, show the button
window.onscroll= function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop>40 || document.documentElement.scrollTop>40) {
        backToTopBtn.style.display= "block";
    } else {backToTopBtn.style.display= "none";
    }
}

//When the user clicks on the button, scroll to the top of the document
backToTopBtn.onclick= function() {
    document.body.scrollTop= 0; //For Safari
    document.documentElement.scrollTop= 0; //For Chrome, Firefox, IE and Opera
}
/**End of the Button to go top**/


//*Jakarta time*//
//Create a new Date object for Jakarta, Indonesia
const jakartaTime= new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"});
const jakartaDate= new Date(jakartaTime);

//Format the date as full day, month, and year
const options= {year: 'numeric', month: 'long', day: 'numeric'};
const formattedDate= jakartaDate.toLocaleDateString('en-US', options);

//Insert the formatted date into the span with classname "dayOfTheYear"
document.querySelector('.dayOfTheYear').innerHTML= formattedDate;

    /**Cursor trail effect**/
    const trailCount = 5;
    const trails = [];

    for (let i = 0; i < trailCount; i++) {
        const trail = document.createElement('div');
        trail.classList.add('trail');
        document.body.appendChild(trail);
        trails.push(trail);
    }

    let mouseX = 0, mouseY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateTrails() {
        trails.forEach((trail, index) => {
            const delay = index * 0.05;
            setTimeout(() => {
                const scrollX = window.scrollX || window.pageXOffset;
                const scrollY = window.scrollY || window.pageYOffset;
                trail.style.transform = `translate(${mouseX + scrollX - 5}px, ${mouseY + scrollY - 5}px)`;
            }, delay * 1000);
        });
        requestAnimationFrame(animateTrails);
    }

    animateTrails();
