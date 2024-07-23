const modal = document.getElementById('modalOpener');


function closeModal() {
  modal.removeAttribute('open');
}

//listen window location to close modal when click some route
window.addEventListener('popstate', closeModal);