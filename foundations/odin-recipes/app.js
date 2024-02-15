const button1 = document.getElementById('recipe-1');
const button2 = document.getElementById('recipe-2');
button1.addEventListener('click', function() {
    window.open("./recipes/lasagna.html", '_blank')
});
button2.addEventListener('click', function() {
    window.open("./recipes/chicken-broth.html", '_blank')
});