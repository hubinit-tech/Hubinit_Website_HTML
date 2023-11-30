document.addEventListener('DOMContentLoaded', function() {
  var goToTheTopDiv = document.getElementById('goToTheTopDiv');
  var goToTheTop = document.getElementById('goToTheTop');
  var rocketAnim = document.querySelector('.rocketAnim');
  var rocketAnim2 = document.querySelector('.rocketAnim2');

  function scrollFunc() {
      var y = window.scrollY;
      if (y >= document.body.scrollHeight / 2) {
          goToTheTopDiv.style.visibility = 'visible'; // Show the button
      } else {
          goToTheTopDiv.style.visibility = 'hidden'; // Hide the button
      }
  }

  function addScrollEvent() {
      window.addEventListener('scroll', scrollFunc);
  }

  function removeScrollEvent() {
      window.removeEventListener('scroll', scrollFunc);
  }

  function hoverHandler(event) {
    if (event.type === 'mouseenter') {
      rocketAnim.style.animationPlayState = 'running';
      rocketAnim.style.animationIterationCount = 'infinite';
      rocketAnim2.style.animationPlayState = 'running';
      rocketAnim2.style.animationIterationCount = 'infinite';
    } else if (event.type === 'mouseleave') {
      rocketAnim.style.animationIterationCount = 0;
      rocketAnim2.style.animationIterationCount = 0;
    }
}

  addScrollEvent();

  if (goToTheTop) {
    goToTheTop.addEventListener('mouseenter', hoverHandler);
    goToTheTop.addEventListener('mouseleave', hoverHandler);
  }

  window.addEventListener('beforeunload', function() {
      removeScrollEvent();
  });
});
