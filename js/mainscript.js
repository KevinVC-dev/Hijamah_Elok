//*JS for the menu on nav bar*//
document.addEventListener("DOMContentLoaded", function() {
    const menuForMemi = document.querySelector(".menuForMemi");
    const options = document.querySelectorAll(".option1, .option2, .option3, .sendWA, .usersGuide, .everyButton");

    const basePath = "/HijamahElok/"; // Base path from root
    const urls = {
        "option1": "services/index.html",
        "option2": "contact_business/index.html",
        "option3": "",
        "sendWA": "",
        "usersGuide": "",
        "everyButton": ""
    };

    menuForMemi.addEventListener("click", function() {
        options.forEach(option => {
            if (option.classList.contains("notVisibleMenu")) {
                option.classList.remove("notVisibleMenu");
                option.classList.add("nowVisibleMenu");
                option.style.display = 'flex'; // Ensure it's displayed
            } else {
                option.classList.remove("nowVisibleMenu");
                option.classList.add("notVisibleMenu");

                // Ensure the element is hidden after the fade-out animation
                option.addEventListener('animationend', function() {
                    if (option.classList.contains("notVisibleMenu")) {
                        option.style.display = 'none';
                    }
                }, {once: true});
            }

            // Add click event to redirect to the specified URL
            option.addEventListener("click", function() {
                const className = option.classList[0];
                if (urls[className]) {
                    let currentPath = window.location.pathname;
                    if (currentPath.includes(basePath)) {
                        currentPath = currentPath.split(basePath)[0];
                    }
                    const fullPath = `${window.location.origin}${currentPath}${basePath}${urls[className]}`;
                    window.location.href = fullPath;
                }
            });
        });
    });
});
//*End of the JS for the menu on nav bar*//



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
//*End of the span Jakarta time*//




/**Cursor trail effect**/
// const trailCount = 3;
// const trails = [];

// for (let i = 0; i < trailCount; i++) {
//     const trail = document.createElement('div');
//     trail.classList.add('trail');
//     document.body.appendChild(trail);
//     trails.push(trail);
// }

// let mouseX = 0, mouseY = 0;

// window.addEventListener('mousemove', (e) => {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
// });

// function animateTrails() {
//     trails.forEach((trail, index) => {
//         const delay = index * 0.05;
//         setTimeout(() => {
//             const scrollX = window.scrollX || window.scrollX;
//             const scrollY = window.scrollY || window.scrollY;
//             trail.style.transform = `translate(${mouseX + scrollX - 5}px, ${mouseY + scrollY - 5}px)`;
//         }, delay * 1000);
//     });
//     requestAnimationFrame(animateTrails);
// }

// animateTrails();
/**End of the Cursor trail effect**/