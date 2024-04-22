document.addEventListener('DOMContentLoaded', function() {

  /* Handle notifaction */

  //change notifaction icon
  const notiButton = document.querySelectorAll('.notification');
  const notiOffIcon = document.getElementById('noti-off');
  const notiOnIcon = document.getElementById('noti-on');

  notiButton.forEach(button => {
    button.addEventListener('click', function() {
      if (notiOnIcon.style.display === 'block') {
        notiOnIcon.style.display = 'none';
        notiOffIcon.style.display = 'block';
      } else if (notiOnIcon.style.display === 'none') {
        notiOnIcon.style.display = 'block';
        notiOffIcon.style.display = 'none';
      }
    });
  });
  
});