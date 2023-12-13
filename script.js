const shareicon  = document.getElementById("fa")
const opener  = document.getElementById("opener")
shareicon.addEventListener("click", changeColor);
function changeColor() {
    shareicon.classList.toggle("changecolor")
    opener.classList.toggle("changecolor")
}
window.addEventListener("resize" , removeClassOnResize)
// Function to remove the class
function removeClassOnResize() {
    // Check if the class is present before removing it
    if (opener.classList.contains("changecolor")) {
        opener.classList.remove("changecolor");
        shareicon.classList.contains("changecolor");
        shareicon.classList.remove("changecolor");
    }
}

// Add an event listener for the 'resize' event
window.addEventListener('resize', removeClassOnResize);
