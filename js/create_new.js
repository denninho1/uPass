/* 
------------ LOAD PAGE ------------
*/
window.addEventListener("load", () => {
   /* cardsValidate() */
});

/* 
----------- MOSTRAR OPÇÃO ESCOLHIDA NO BOTAO ------------
*/
const btnOptions = document.querySelector(".btn_option");
const optionsList = document.querySelector(".options_list");
const options = document.querySelectorAll(".item");
const selectedOption = document.querySelector(".selected_option");
const createPassForm = document.querySelector(".create_password");
const createFolderForm = document.querySelector(".create_folder");
const formCreate = document.querySelector(".forms_create");

btnOptions.addEventListener("click", () => {
  optionsList.classList.toggle("active");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    let textOption = option.children[1].textContent;
    let textBtn = btnOptions.children[0];
    textBtn.textContent = textOption;
    optionsList.classList.remove("active");
    //----------- MOSTRAR CAMPOS DA OPÇÃO SELECIONADA ------------
    if (option === optionsList.children[0]) {
      createFolderForm.classList.add("active");
      createPassForm.classList.remove("active");
      formCreate.style.height = "auto";
      createFolderForm.style.height = createFolderForm.scrollHeight + "px";
      createPassForm.style.height = "0px";
    } else {
      createPassForm.classList.add("active");
      createFolderForm.classList.remove("active");
      formCreate.style.height = "auto";
      createPassForm.style.height = createPassForm.scrollHeight + "px";
      createFolderForm.style.height = "0px";
    }
  });
});

/* 
---------- MOSTRAR E FECHAR JANELA MODAL DE NOVA CRIAÇÃO OU COMPARTILHAMENTO --------------
*/
const btnShowModal = document.querySelector(".btn_show_modal");
const modalCreate = document.querySelector(".create_new_modal");
const closeModal = document.querySelectorAll(".close_modal");

btnShowModal.addEventListener("click", () => {
  showModal();
});

function showModal() {
  modalCreate.classList.add("active");
  btnShowModal.style.display = "none";
  window.document.body.style.overflow = "hidden";
}

closeModal.forEach((close) => {
  close.addEventListener("click", () => {
    let textBtn = btnOptions.children[0];
    textBtn.textContent = "Selecione uma opção";
    modalCreate.classList.remove("active");
    optionsList.classList.remove("active");
    createFolderForm.classList.remove("active");
    createPassForm.classList.remove("active");
    btnShowModal.style.display = "block";
    formCreate.style.height = "250px";
    window.document.body.style.overflow = "auto";
  });
});

/* 
----------------- VALIDANDO SE HÁ SENHAS SALVAS --------------------
*/
const cards = document.querySelector('.cards');
const cardsContainer = document.querySelector('.cards_container');
/* 
function cardsValidate() {
  let cardLength = cards.children.length;
  if (cardLength === 0) {
    let noItems = '';
    noItems = '<div class="no_items"><h1 class="heading">Cofre vazio</h1><h3 class="subtitle">Por favor, crie uma nova senha ou pasta!</h3><button class="btn show_modal">Nova criação</button></div>';
    cardsContainer.innerHTML += noItems;
    const btnShowModal_2 = document.querySelector(".show_modal");
    btnShowModal_2.addEventListener("click", () => {
      showModal();
    });
  } else if (cardLength === 1) {
    var elemento = document.querySelector(".no_items");
    elemento.parentNode.removeChild(elemento);
    createFolder();
  }
} */

/* 
------------ CREATE FOLDER ---------
*/
const inputNameFolder = document.querySelector(".new_folder");
const newFolderBtn = document.querySelector(".btn_create_folder");

function createFolder() {
  let NewFolderName = inputNameFolder.value;

  if (NewFolderName === "") {
    alert("Preencha o campo");
  } else if (NewFolderName.length < 2) {
    alert('Minimo 2 caracteres')
  } else {
    if (cards.children.length <= 2) {
      let newFolder =
      '<li class="card"><div class="imgs_wrapper"><img src="../images/netflix.png" alt=""></div><div class="text"><h2 id="name_folder">' 
      +NewFolderName+
      '</h2><span id="total_pass">0 senhas</span></div><div class="config_card"><i class="fas fa-ellipsis-h"></i></div><a href="#"></a></li>';
      cards.innerHTML += newFolder;
    } else {
        alert('Você já o atingiu o limite de pastas (3)')
    }
  }
}

newFolderBtn.addEventListener('click', () => {
    createFolder();
});
  
inputNameFolder.addEventListener('input', () => {
    if (inputNameFolder.value.length >= 15 ) {
        inputNameFolder.setAttribute('maxLength', '15')
    }
});

/* 
-------- FORMS PREVENT DEFAULT --------
*/
createFolderForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

createPassForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
