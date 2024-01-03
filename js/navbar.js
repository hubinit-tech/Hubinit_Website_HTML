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