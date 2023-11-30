// Function to toggle the mobile navigation
function toggleMobileNav() {
  const navbarCollapse = document.getElementById('navbar-collapse');
  const icon1 = document.getElementById('icon1');
  const icon2 = document.getElementById('icon2');
  navbarCollapse.style.display = navbarCollapse.style.display === 'block' ? 'none' : 'block';

  if (navbarCollapse.style.display === 'block') {
    icon1.style.display = 'none';
    icon2.style.display = 'block';
  } else {
    icon1.style.display = 'block';
    icon2.style.display = 'none';
  }
}


// Function to handle responsive behavior
function onResize() {
  const windowWidth = window.innerWidth;
  const navbarMain = document.getElementById('navbar-main');
  const navbarMobile = document.getElementById('navbar-mobile');
  
  if (windowWidth >= 828) {
      navbarMain.style.display = 'flex';
      navbarMobile.style.display = 'none';
  } else {
      navbarMain.style.display = 'none';
      navbarMobile.style.display = 'flex';
  }
}

// Attach event listeners
document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.getElementById('mobile-toggle');
  mobileToggle.addEventListener('click', toggleMobileNav);

  window.addEventListener('resize', onResize);
  onResize(); // Call it initially to set the initial state
});


// const blogMenu = document.getElementById('blog-menu');
// const blogNav = document.getElementById('blog-nav');
// const openBlogNav = document.getElementById('openBlogNav');
// const closeBlogNav = document.getElementById('closeBlogNav');

// blogMenu.addEventListener('mouseenter', () => {
//   blogNav.style.display = 'block'; // Show the navbar when hovering
//   openBlogNav.style.display = 'none';
//   closeBlogNav.style.display = 'block';
// });

// blogMenu.addEventListener('mouseleave', () => {
//   blogNav.style.display = 'none'; // Hide the navbar when the mouse leaves the "Blog" link
//   openBlogNav.style.display = 'block';
//   closeBlogNav.style.display = 'none';
// });