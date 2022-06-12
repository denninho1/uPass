/* 
------------ LOAD PAGE ------------
*/
window.addEventListener("load", () => {
  readFolders();
});

let folders = [
  {
    idFolder: 1,
    nameFolder: 'exemplo',
    passwords: [
      {
        idPass: 1,
        namePassword: 'instagram',
        loginPassword: 'exemplo01',
        password: 'minhasenha'
      }, 
      {
        idPass: 2,
        namePassword: 'facebook',
        loginPassword: 'exemplo@gmail.com',
        password: 'minha senha'
      }
    ]
  }
]

// Criação de pasta
const inputNameFolder = document.querySelector('.new_folder');
const newFolderBtn = document.querySelector('.btn_create_folder');
const cards = document.querySelector('.cards');
const titleMain = document.querySelector('.main_title')
const formFolder = document.querySelector('.form_create_folder')
const formPassword = document.querySelector('.form_create_password')


// Função para criar uma nova pasta
function createFolder() {
  let nameFolder = inputNameFolder.value.trim();
  validateFolder(nameFolder)
}

// Função para criar um novo elemento para pasta
function createElementFolder(nameFolder, id) {
  const folderContainer = document.createElement('li')
  folderContainer.classList.add('card')
  folderContainer.classList.add('folder')
  folderContainer.setAttribute('data-id', id)

  folderContainer.addEventListener('click', e => {
    openFolderPassword(e);
  })

  const folderImage = document.createElement('img')
  folderImage.classList.add('img_folder')
  folderImage.src = '../images/pasta icon.svg'
  
  const folderName = document.createElement('h2')
  folderName.classList.add('folder_name')
  folderName.innerText = nameFolder; 
  
  folderContainer.appendChild(folderImage)
  folderContainer.appendChild(folderName)

  cards.appendChild(folderContainer)
}

//Cria pasta na memoria
function createMemoryFolder(nameFolder) {
  const foldersMemory = folders;
  const foldersLength = folders.length + 1
  const newFolderMemory = {
    idFolder: foldersLength,
    nameFolder: `${nameFolder}`,
    passwords: []
  }

  foldersMemory.push(newFolderMemory)
  createElementFolder(nameFolder, foldersLength );
}

// Valida a criação de pastas
function validateFolder(nameFolder) {
    let nameFolderLength = nameFolder.length;
    const foldersMemory = folders;

     if (nameFolder === "") {
      alert('Preencha o campo');
    } else if (nameFolderLength < 4) {
      alert('Minimo 4 caracteres')
    } else {
      if (foldersMemory.length === 4) {
        alert('Você atingiu o limite máximo de pastas (4)')
      } else {
        createMemoryFolder(nameFolder);
      }
    }
}

// Ler pastas armazenadas na memoria e coloca na tela
function readFolders() {
  const foldersMemory = folders;
  foldersMemory.forEach(folder => {
    let nameFolder = folder.nameFolder;
    let idFolder = folder.idFolder
    createElementFolder(nameFolder, idFolder)
  })
}

// Eventos
newFolderBtn.addEventListener('click', e => {
  createFolder();
});
  
inputNameFolder.addEventListener('keypress', () => {
  // Validando tamanho de caracter
  if (inputNameFolder.value.length >= 20 ) {
      inputNameFolder.setAttribute('maxLength', '20')
  }
});

// Abre a pasta e mostra as senhas
function openFolderPassword(e) {
  const click = e.target.getAttribute('data-id');
  const foldersMemory = folders
  cards.innerHTML = ''
  titleMain.innerHTML = ''
  formFolder.classList.remove('active');
  formPassword.classList.add('active');
  
  foldersMemory.forEach(folder => {
    let idFolder = folder.idFolder
    let nameFolder = folder.nameFolder
    let passwords = folder.passwords
    if (click == idFolder) { 
      modificarTitle(nameFolder);
      readPasswords(passwords);
    } 
  })
}

/*
------------- CRIAÇÃO DE SENHA -----------
*/

const inputNamePassword = document.querySelector('.input_name_password')
const inputLogin = document.querySelector('.input_platform_login')
const inputPassword = document.querySelector('.input_platform_password')
const newPasswordBtn = document.querySelector('.btn_create_password')

// Cria senha
function createPassword() {
  let namePasswordValue = inputNamePassword.value
  let loginValue = inputLogin.value
  let passwordValue = inputPassword.value
  validatePasswords(namePasswordValue, loginValue, passwordValue);
}

// Criar elementos para senhas
function createPasswordElement(namePassword, loginPassword, passwordValue) {
  const passwordContainer = document.createElement('li');
  passwordContainer.classList.add('card');
  passwordContainer.classList.add('password');

  const passwordImage = document.createElement('img')
  passwordImage.classList.add('img_password')
  passwordImage.src = '../images/cadeado icon.svg'

  const passwordName = document.createElement('span');
  passwordName.classList.add('name_password');
  passwordName.innerHTML = namePassword;
  
  const passwordLogin = document.createElement('span')
  passwordLogin.classList.add('login_password');
  passwordLogin.innerHTML = loginPassword;
  
  const password = document.createElement('span');
  password.classList.add('pass');
  password.innerHTML = passwordValue

  passwordContainer.appendChild(passwordImage);
  passwordContainer.appendChild(passwordName);
  passwordContainer.appendChild(passwordLogin);
  passwordContainer.appendChild(password);

  cards.appendChild(passwordContainer)
}

// Cria senha na memoria
function createPasswordMemory(name, login, password) {
  const foldersMemory = folders;
  const newPassword = {
      idPass: 1 ,
      namePassword: `${name}`,
      login: `${login}`,
      password: `${password}`
  }

  /* foldersMemory[].passwords.push(newPassword) */
  createPasswordElement(name, login, password)
}

// Ler as senhas na memoria e coloca na tela
function readPasswords(passwords) {
  passwords.forEach(password => {
    let namePassword = password.namePassword
    let loginPassword = password.loginPassword
    let passwordValue = password.password

    createPasswordElement(namePassword, loginPassword, passwordValue);
  })
}

// Valida a criação de senhas
function validatePasswords(name, login, password) {
  if(name.length === 20) {
    return
  } else if(login === '') {
    return
  } else if (password === '') {
    return
  } else {
    createPasswordMemory(name, login, password);
  }
}

// Evento para criar senha
newPasswordBtn.addEventListener('click', () => {
  createPassword();
})


function modificarTitle(name) {
  const backFolder = document.createElement('span')
  backFolder.classList.add('back_folders')
  backFolder.innerHTML = '<'
  backFolder.title = 'Voltar para as pastas'

  backFolder.addEventListener('click', () => {
    cards.innerHTML = ''
    titleMain.innerHTML = 'Suas pastas'
    backFolder.remove()
    readFolders();
    formFolder.classList.add('active');
    formPassword.classList.remove('active');
  })

  const text = document.createElement('span')
  text.innerHTML = `Senhas da pasta - ${name}`

  titleMain.appendChild(backFolder)
  titleMain.appendChild(text)
}


