// VIDEO LOGIC

// Get the video element
let video = document.getElementById("myVideo");

// Function to play the video when it reaches the top of the screen
function playVideoIfVisible() {
    let videoOffset = video.getBoundingClientRect().top;
    let windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (videoOffset < windowHeight) {
        video.play();
        // Optionally, you can remove the event listener once the video starts playing
        window.removeEventListener("scroll", playVideoIfVisible);
    }
}

// Add event listener to check for video visibility on scroll
window.addEventListener("scroll", playVideoIfVisible);

// Optionally, you can also trigger the check on page load
playVideoIfVisible();