// VIDEO LOGIC

// Get the video element and overlay element
let video = document.getElementById("myVideo");
let overlay = document.getElementById("overlay");

// Function to update overlay visibility and text when video is paused
function updateOverlay() {
  if (video.paused) {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
}

// Function to play the video when it reaches the top of the screen
function playVideoIfVisible() {
  let videoOffset = video.getBoundingClientRect().top;
  let windowHeight = window.innerHeight || document.documentElement.clientHeight;

  console.log("Video Offset:", videoOffset);
  console.log("Window Height:", windowHeight);

  if (videoOffset <= 0) {
    video.play();
    window.removeEventListener("scroll", playVideoIfVisible);
  }
}

// Function to resume the video
function resumeVideo() {
  video.play();
}

// Add event listeners
window.addEventListener("scroll", playVideoIfVisible);
video.addEventListener("play", updateOverlay);
video.addEventListener("pause", updateOverlay);

// Optionally, you can also trigger the check on page load
playVideoIfVisible();


// FEATURES SECTION LOGIC

document.addEventListener("DOMContentLoaded", function () {
  const featuresContainers = document.querySelectorAll(".features-container");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
          }
      });
  }, { threshold: 0.5 });

  featuresContainers.forEach(container => {
      observer.observe(container);
  });
});


// SLIDER LOGIC

let currentIndex = 0;
const slides = document.querySelector('.slider');
const totalSlides = slides.children.length;
document.querySelector('.prev').style.display = 'none';

function changeSlide(direction) {
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  const translateValue = -currentIndex * 30;
  slides.style.transform = `translateX(${translateValue}%)`;

  document.querySelector('.prev').style.display = currentIndex === 0 ? 'none' : 'block';
  document.querySelector('.next').style.display = currentIndex === 5 ? 'none' : 'block';
}