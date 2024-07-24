const modal = document.getElementById('modalOpener');
const contactForm = document.getElementById('contact-form');
const error = document.getElementById('error');
const send = document.getElementById('status');
function closeModal() {
  modal.removeAttribute('open');
}

//listen window location to close modal when click some route
window.addEventListener('popstate', closeModal);

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  error.classList.add('hidden');
  send.textContent = 'Starting';
  fetch('https://celebra.solsoftware.mx/api/contact-portafolio', {
    method: 'POST',
    body: new FormData(contactForm),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  }).then((response) => {
    if (response.ok) {
      closeModal();
      contactForm.reset();
      alert('Mensaje enviado correctamente');
    } else {
      error.classList.remove('hidden');
      error.textContent = 'Error al enviar el mensaje';
    }
  }).finally(() => {
    send.textContent = 'Start';
  });
});