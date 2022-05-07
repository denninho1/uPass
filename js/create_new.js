const btnOptions = document.querySelector('.btn_option');
const optionsList = document.querySelector('.options_list');
const options = document.querySelectorAll('.option');
const selectedOption = document.querySelector('.selected_option');

btnOptions.addEventListener('click', () => {
    optionsList.classList.toggle('active');

});

