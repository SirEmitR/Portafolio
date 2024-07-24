const modal = document.getElementById('modalOpener');
const contactForm = document.getElementById('contact-form');
const error = document.getElementById('error');
const send = document.getElementById('status');
const responseDiv = document.getElementById('response');

function closeModal() {
  modal.removeAttribute('open');
}

//listen window location to close modal when click some route
window.addEventListener('popstate', closeModal);

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  error.classList.add('hidden');
  responseDiv.classList.add('hidden');
  send.textContent = 'Starting';
  const formData = new FormData(contactForm);
  const email = formData.get('email');
  const name = formData.get('name');
  const message = formData.get('message') || '';

  fetch('https://server-portafolio.fly.dev/v1/create', {
    method: 'POST',
    body: JSON.stringify({ email, name, message }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    if (response.ok) {
      closeModal();
      contactForm.reset();
      responseDiv.classList.remove('hidden');

      setTimeout(() => {
        responseDiv.classList.add('hidden');
      }, 3000);
    } else {
      error.classList.remove('hidden');
      error.textContent = 'Error al enviar el mensaje';
    }
  }).finally(() => {
    send.textContent = 'Start';
  }); 
});