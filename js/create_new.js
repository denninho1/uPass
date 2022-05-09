/* 
----------- MOSTRAR OPÇÃO ESCOLHIDA NO BOTAO ------------
*/
const btnOptions = document.querySelector('.btn_option');
const optionsList = document.querySelector('.options_list');
const options = document.querySelectorAll('.item');
const selectedOption = document.querySelector('.selected_option');
const createPass = document.querySelector('.create_password')
const createFolder = document.querySelector('.create_folder')
const formCreate = document.querySelector('.forms_create')

btnOptions.addEventListener('click', () => {
    optionsList.classList.toggle('active');
});

options.forEach(option => {
    option.addEventListener('click', () => {
        let textOption = option.children[1].textContent;
        let textBtn = btnOptions.children[0];
        textBtn.textContent = textOption;
        optionsList.classList.remove('active');
        /* 
        ----------- MOSTRAR CAMPOS DA OPÇÃO SELECIONADA ------------
        */ 
       if (option === optionsList.children[0]) {
           createFolder.classList.add('active')
           createPass.classList.remove('active')
           formCreate.style.height = 'auto'
           createFolder.style.height = createFolder.scrollHeight+'px'
           createPass.style.height = '0px'
       } else {
           createPass.classList.add('active')
           createFolder.classList.remove('active')
           formCreate.style.height = 'auto'
           createPass.style.height = createPass.scrollHeight+'px'
           createFolder.style.height = '0px'
       }
    });
});

/* 
---------- MOSTRAR E FECHAR JANELA MODAL DE NOVA CRIAÇÃO OU COMPARTILHAMENTO --------------
*/
const btnShowModal = document.querySelector('.btn_create');
const modalCreate = document.querySelector('.create_new_modal');
const closeModal = document.querySelectorAll('.close_modal');

btnShowModal.addEventListener('click', () => {
    modalCreate.classList.add('active')
    btnShowModal.style.display = 'none';
    window.document.body.style.overflow = 'hidden';
});

closeModal.forEach(close => {
    close.addEventListener('click', () => {
        modalCreate.classList.remove('active')
        optionsList.classList.remove('active');
        createFolder.classList.remove('active')
        createPass.classList.remove('active')
        btnShowModal.style.display = 'block';
        formCreate.style.height = '250px'
        window.document.body.style.overflow = 'auto';
    })
})








