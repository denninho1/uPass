/* 
----------- MOSTRAR OPÇÃO ESCOLHIDA NO BOTAO ------------
*/
const btnOptions = document.querySelector('.btn_option');
const optionsList = document.querySelector('.options_list');
const options = document.querySelectorAll('.item');
const selectedOption = document.querySelector('.selected_option');

btnOptions.addEventListener('click', () => {
    optionsList.classList.toggle('active');
});

options.forEach(option => {
    option.addEventListener('click', () => {
        let textOption = option.children[1].textContent;
        let textBtn = btnOptions.children[0];
        textBtn.textContent = textOption;
    })
})

