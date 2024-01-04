function initializeMobileMenu() {
  let mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.style.display = "none";
}
initializeMobileMenu();

function toggleMobileMenu() {
  let mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
  
  let menuIcon = document.querySelector(".menu-icon");
  let closeIcon = document.querySelector(".close-icon");

  if (mobileMenu.style.display === "flex") {
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
}

function closeMobileMenu() {
  let mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.style.display = "none";

  let menuIcon = document.querySelector(".menu-icon");
  let closeIcon = document.querySelector(".close-icon");

  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
}
