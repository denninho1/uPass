/* 
---------- MOSTRAR E FECHAR MODAL CREATE NEW --------------
*/
const btnShowModal = document.querySelector(".btn_show_modal");
const modalCreate = document.querySelector(".create_new_modal");
const closesModal = document.querySelectorAll(".close_modal");
const createPassForm = document.querySelector(".form_create_password");
const createFolderForm = document.querySelector(".form_create_folder");

// Função para abrir modal ou fechar modal
function showModal() {
  modalCreate.classList.add('active');
  btnShowModal.style.display = 'none';
  window.document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalCreate.classList.remove('active');
  btnShowModal.style.display = 'block';
  window.document.body.style.overflow = 'auto';
}

// Eventos
btnShowModal.addEventListener('click', () => {
  showModal();
});

closesModal.forEach(close => {
  close.addEventListener('click', e => {
    closeModal();
  });
});

// Prevents dafault
createFolderForm.addEventListener('submit', e => {
    e.preventDefault();
});

createPassForm.addEventListener('submit', e => {
  e.preventDefault();
})