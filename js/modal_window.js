const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const modalBackdrop = document.getElementById('modalBackdrop');
const backdrop = document.getElementById('modalBackdrop');

openModalButton.addEventListener('click', function() {
  modal.style.display = 'block';
  modalBackdrop.style.display = 'block';
  document.body.style.overflow = 'hidden';

  setTimeout(function() {
    modal.style.opacity = '1';
    modalBackdrop.style.opacity = '1';
  }, 50);
});

closeModalButton.addEventListener('click', function() {
  modal.style.opacity = '0';
  modalBackdrop.style.opacity = '0';

  setTimeout(function() {
    modal.style.display = 'none';
    modalBackdrop.style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 300);
});

backdrop.addEventListener('click', function() {
  modal.style.opacity = '0';
  modalBackdrop.style.opacity = '0';

  setTimeout(function() {
    modal.style.display = 'none';
    modalBackdrop.style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 300);
});