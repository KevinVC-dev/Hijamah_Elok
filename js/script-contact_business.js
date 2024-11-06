////Start of the button to show the phone number////
let ulLikeCommsB = document.getElementsByClassName('ulLikeCommsB')[0];
let ulLikeCommsBInfo = document.getElementsByClassName('ulLikeCommsBInfo')[0];

ulLikeCommsB.addEventListener("click", function() {
    // Get the corresponding '.ulLikeCommsBInfo' element
    var ulLikeCommsBInfo= document.getElementsByClassName("ulLikeCommsBInfo")[0];

    // Toggle the display property with animation
    if (ulLikeCommsBInfo.classList.contains("hide") || ulLikeCommsBInfo.style.display === "none" || ulLikeCommsBInfo.style.display === "") {
      ulLikeCommsBInfo.classList.remove("hide");
      ulLikeCommsBInfo.classList.add("show");
      ulLikeCommsBInfo.style.display = "block"; // Ensure it's visible
    } else {
      ulLikeCommsBInfo.classList.remove("show");
      ulLikeCommsBInfo.classList.add("hide");
      setTimeout(function() {
        ulLikeCommsBInfo.style.display = "none";
      }, 600); // Match the duration of the animation
    }
});
////End of the button to show the phone number////


////Start of the copy to clipboard button////
// document.addEventListener("DOMContentLoaded", function() {
//     const copyLinksIcon = document.querySelector(".copyLinksIcon");
//     const linksPlace = document.querySelector(".linksPlace");

//     copyLinksIcon.addEventListener("click", function() {
//         linksPlace.select();
//         linksPlace.setSelectionRange(0, 99999); // For mobile devices

//         try {
//             const successful = document.execCommand('copy');
//             const msg = successful ? 'successful' : 'unsuccessful';
//             console.log('Copying text command was ' + msg);
//         } catch (err) {
//             console.log('Oops, unable to copy');
//         }
//     });
// }); Old version. Deprecated.

document.addEventListener("DOMContentLoaded", function() {
    const copyLinksIcons = document.querySelectorAll(".copyLinksIcon");
    const linksPlaces = document.querySelectorAll(".linksPlace");

    copyLinksIcons.forEach((icon, index) => {
        icon.addEventListener("click", function() {
            const link = linksPlaces[index];
            link.select();
            link.setSelectionRange(0, 99999); // For mobile devices

            navigator.clipboard.writeText(link.value)
            .then(() => {
                alert('Text copied to clipboard successfully!');
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    });
});//New version. Up-to-date.

////End of the copy to clipboard button////