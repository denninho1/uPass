/* 
------- MENU HAMBURGUER -------
*/
const menuBtn = document.querySelector('.menu');
const navLateral = document.querySelector('.nav_lateral');
const closeNavbar = document.querySelector('#close_nav');

// Abrir menu
menuBtn.addEventListener('click', () => {
    navLateral.classList.add('active');
});

// Fechar menu
closeNavbar.addEventListener('click', () => {
    navLateral.classList.remove('active');
});















