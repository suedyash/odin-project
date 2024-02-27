// get collection of elements with the class 'sign-up'
var signUpButtons = document.getElementsByClassName('sign-up');

// iterate over the collection and add event listener to each button
for (var i = 0; i < signUpButtons.length; i++) {
  signUpButtons[i].addEventListener('click', function() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  });
};