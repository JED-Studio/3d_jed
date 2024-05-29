const modalClose = document.getElementById('pause1');
const video = document.getElementById('video1');

// Останавливаем видео при клике на кнопку закрытия модального окна
modalClose.addEventListener('click', function() {
  video.pause();
});