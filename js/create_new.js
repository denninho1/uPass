/* 
------------ LOAD PAGE ------------
*/
window.addEventListener("load", () => {
  moreFolder();
});


/* 
---------- MOSTRAR E FECHAR MODAL CREATE NEW --------------
*/
const btnShowModal = document.querySelector(".btn_show_modal");
const modalCreate = document.querySelector(".create_new_modal");
const closeModal = document.querySelectorAll(".close_modal");
const createPassForm = document.querySelector(".create_password");
const createFolderForm = document.querySelector(".create_folder");

// Função para abrir forms para salvar uma senha
function showFormPass() {
  createPassForm.classList.add('active');
  createFolderForm.classList.remove('active');
  createPassForm.style.height = createPassForm.scrollHeight + "px";
  createFolderForm.style.height = "0px";
  modalCreate.style.height = "auto";
};

// Função para abrir forms de criação de pasta
function showFormFolder() {
  createFolderForm.classList.add('active');
  createPassForm.classList.remove('active');
  createFolderForm.style.height = createFolderForm.scrollHeight + "px";
  createPassForm.style.height = "0px";
  modalCreate.style.height = "auto";
};

// Função para abrir modal ou fechar modal
function showModal() {
  if (modalCreate.classList.contains('active')) {
    modalCreate.classList.remove('active');
    btnShowModal.style.display = 'block';
    optionsList.classList.remove('active');
    modalCreate.style.height = '250px';
    window.document.body.style.overflow = 'auto';
    let textBtn = btnOptions.children[0];
    textBtn.textContent = 'Selecione uma opção';
    createFolderForm.classList.remove('active')
    createPassForm.classList.remove('active')
  } else {
    modalCreate.classList.add('active');
    btnShowModal.style.display = 'none';
    window.document.body.style.overflow = 'hidden';
  }
}

// Evento para fechar modal
closeModal.forEach(close => {
  close.addEventListener('click', () => {
    showModal();
  });
});

// Evento para abrir modal
btnShowModal.addEventListener('click', () => {
  showModal();
});

/* 
----------- MOSTRAR OPÇÃO ESCOLHIDA NO BOTAO ------------
*/
const btnOptions = document.querySelector('.btn_options');
const optionsList = document.querySelector('.options_list');
const options = document.querySelectorAll('.option');

// Evento para mostrar opções do modal create
btnOptions.addEventListener('click', () => {
  optionsList.classList.toggle("active");
});


options.forEach(option => {
  // Ao escolher uma opção, aparecer no botão a opção escolhida
  option.addEventListener("click", () => {
    let textOption = option.children[1].textContent;
    let textBtn = btnOptions.children[0];
    textBtn.textContent = textOption;
    optionsList.classList.remove("active");

    // Abrir o form da opção escolhida
    if (option.id === 'folder') {
      showFormFolder();
    } else {
      showFormPass();
    }
  }); 
});

/* 
----------------- VALIDANDO SE HÁ SENHAS SALVAS --------------------
*/
const cards = document.querySelector('.cards');
const cardsContainer = document.querySelector('.cards_container');

// Função para criar um novo card e inserir somente quando o limite de pasta não estiver ultrapassado
function moreFolder() {
  let cardLength = cards.children.length;

  console.log(cardLength)

  const moreFolderContainer = document.createElement('div');
  moreFolderContainer.classList.add('more_folder');
  moreFolderContainer.classList.add('card');

  const moreFolderTitle = document.createElement('span');
  moreFolderTitle.classList.add('more_folder_title');

  const moreFolderButton = document.createElement('span');
  moreFolderButton.classList.add('more_folder_button');
  moreFolderButton.innerText = 'Clique aqui';

  const moreFolderShowModalButton = document.createElement('button');
  moreFolderShowModalButton.classList.add('show_modal');

  moreFolderShowModalButton.appendChild(moreFolderTitle);
  moreFolderShowModalButton.appendChild(moreFolderButton);
  moreFolderContainer.appendChild(moreFolderShowModalButton);

  if (cardLength === 1) {
    cards.appendChild(moreFolderContainer);
    moreFolderTitle.innerText = `Você ainda pode criar 3 pastas`;
  } else if (cardLength === 2) {
    cards.appendChild(moreFolderContainer);
    moreFolderTitle.innerText = `Você ainda pode criar 2 pastas`;
  } else if (cardLength === 3) {
    cards.appendChild(moreFolderContainer);
    moreFolderTitle.innerText = `Você ainda pode criar 1 pasta`
  } else {
    cards.removeChild(moreFolderContainer)
    moreFolderTitle.innerText = `Você ainda pode criar 0 pasta`
  }

  moreFolderShowModalButton.addEventListener('click', () => {
    showModal();
  });

}

/* 
------------ CREATE NEW FOLDER ---------
*/
const inputNameFolder = document.querySelector(".new_folder");
const newFolderBtn = document.querySelector(".btn_create_folder");

// Função para criar um nova pasta
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

  // Elemento para o redirecionamento da senhas
  const folderLink = document.createElement('a');
  folderLink.href = '#';
  folderLink.classList.add('folder_link');

  folderContainer.appendChild(folderImg)
  folderContainer.appendChild(folderName)
  folderContainer.appendChild(folderTotalPass)
  folderContainer.appendChild(folderLink)

  if (NewFolderName === "") {
    alert("Preencha o campo");
  } else if (NewFolderName.length < 3) {
    alert('Minimo 2 caracteres')
  } else {
    if (cards.children.length >= 4) {
      alert('Você já o atingiu o limite de pastas (4)')
    } else {
      cards.appendChild(folderContainer);
      inputNameFolder.value = "";
      moreFolder()
    }
  }
}

// Evento para o botão de criar uma nova pasta
newFolderBtn.addEventListener('click', (e) => {
    createFolder();
});
  
// Validando o tamanho de caracteres digitado para o nome da pasta
inputNameFolder.addEventListener('keypress', () => {
    if (inputNameFolder.value.length >= 20 ) {
        inputNameFolder.setAttribute('maxLength', '20')
    }
});



// Prevent default nos forms
createFolderForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

createPassForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
