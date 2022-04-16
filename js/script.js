/* 
------- PAGE LOAD -------
*/

/* 
------- MENU HAMBURGUER -------
*/
const menuBtn = document.querySelector('.menu');
const navLateral = document.querySelector('.nav_lateral');
const closeNavbar = document.querySelector('#close_nav');
const main = document.querySelector('.main');
const windowScreen = window.innerWidth;

menuBtn.addEventListener('click', () => {
    if (windowScreen >= 768 && windowScreen <= 1920) {
        navLateral.classList.add('active');
        main.classList.add('active');
    } else {
        navLateral.classList.add('active');
        main.classList.remove('active');
    }
});

closeNavbar.addEventListener('click', () => {
    navLateral.classList.remove('active');
    main.classList.remove('active');
});















