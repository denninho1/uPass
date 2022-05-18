/* 
------------ LOAD PAGE ------------
*/
window.addEventListener("load", () => {
   /* cardsValidate() */
});


/* 
---------- MOSTRAR E FECHAR MODAL CREATE NEW --------------
*/
const btnShowModal = document.querySelector(".btn_show_modal");
const modalCreate = document.querySelector(".create_new_modal");
const closeModal = document.querySelectorAll(".close_modal");
const createPassForm = document.querySelector(".create_password");
const createFolderForm = document.querySelector(".create_folder");

btnShowModal.addEventListener("click", () => {
  showModal();
});

function showFormPass() {
    createPassForm.classList.add('active');
    createFolderForm.classList.remove('active');
};

function showFormFolder() {
  createFolderForm.classList.add('active');
  createPassForm.classList.remove('active');
};

function showModal() {
  modalCreate.classList.add("active");
  btnShowModal.style.display = "none";
  window.document.body.style.overflow = "hidden";
}

closeModal.forEach(close => {
  close.addEventListener("click", () => {
    let textBtn = btnOptions.children[0];
    textBtn.textContent = "Selecione uma opção";
    optionsList.classList.remove("active");
    btnShowModal.style.display = "block";
    modalCreate.style.height = "250px";
    modalCreate.classList.remove('active')
    window.document.body.style.overflow = "auto";
    showForms();
  });
});

/* 
----------- MOSTRAR OPÇÃO ESCOLHIDA NO BOTAO ------------
*/
const btnOptions = document.querySelector(".btn_options");
const optionsList = document.querySelector(".options_list");
const options = document.querySelectorAll(".option");

btnOptions.addEventListener("click", () => {
  optionsList.classList.toggle("active");
});

options.forEach(option => {
  option.addEventListener("click", () => {    
    let textOption = option.children[1].textContent;
    let textBtn = btnOptions.children[0];
    textBtn.textContent = textOption;
    optionsList.classList.remove("active");

    //----------- MOSTRAR CAMPOS DA OPÇÃO SELECIONADA ------------
    if (option.id === 'folder') {
      showFormFolder()
      modalCreate.style.height = "auto";
      createFolderForm.style.height = createFolderForm.scrollHeight + "px";
      createPassForm.style.height = "0px";
    } else {
      showFormPass();
      modalCreate.style.height = "auto";
      createPassForm.style.height = createPassForm.scrollHeight + "px";
      createFolderForm.style.height = "0px";
    }
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
------------ CREATE NEW FOLDER ---------
*/
const inputNameFolder = document.querySelector(".new_folder");
const newFolderBtn = document.querySelector(".btn_create_folder");

function createFolder() {
  // Nome digitado no input para criar pasta
  let NewFolderName = inputNameFolder.value;

  // Criação do elemento li para lista de pasta
  const folderContainer = document.createElement('li');
  folderContainer.classList.add('card')

  // Elemento img para imagem da pasta padrão
  const folderImg = document.createElement('img');
  folderImg.src = "../images/pasta icon.svg";
  folderImg.classList.add('img_folder')

  // Elemento h2 contendo o nome da pasta
  const folderName = document.createElement('h2');
  folderName.classList.add('folder_name');
  folderName.innerHTML = NewFolderName;

  // Elemento span para mostrar total de senhas salvas dentro daquela pasta
  const folderTotalPass = document.createElement('span');
  folderTotalPass.classList.add('total_pass')
  let totalPass = '0'
  folderTotalPass.innerHTML = `${totalPass} senhas`

  // Elemento a para redirecionamento da senhas
  const folderLink = document.createElement('a')
  folderLink.href = '#'
  folderLink.classList.add('folder_link')

  folderContainer.appendChild(folderImg)
  folderContainer.appendChild(folderName)
  folderContainer.appendChild(folderTotalPass)
  folderContainer.appendChild(folderLink)

  if (NewFolderName === "") {
    alert("Preencha o campo");
  } else if (NewFolderName.length < 2) {
    alert('Minimo 2 caracteres')
  } else {
    if (cardsContainer.length === 2) {
      alert('Você já o atingiu o limite de pastas (3)')
    } else {
      cardsContainer.appendChild(folderContainer);
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
