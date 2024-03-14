document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  
  input.addEventListener('keydown', function(event) {
    output.textContent = `You have pressed the key: "${event.key}"`;
  });
});