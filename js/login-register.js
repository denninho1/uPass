/* 
------- SHOW AND HIDE PASSWORD -------
*/
const hidePassword = document.querySelectorAll('#hide_pass');
const inputPassword = document.querySelectorAll('.password');

hidePassword.forEach(eye => {
    eye.addEventListener('click', () => {
        inputPassword.forEach(inputPass => {
            if (inputPass.type === "password") {
                inputPass.type = "text";
                
                hidePassword.forEach(eyeIcon => {
                    eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
                })
               
            } else {
                inputPass.type = "password";
                hidePassword.forEach(eyeIcon => {
                    eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
                });
            }
        });
    });
});

/*
------- TOGGLE FORM LOGIN AND REGISTER -------
*/
const toggleLogin_Register = document.querySelectorAll(".btn_toggle");
const formLogin_Register = document.querySelectorAll('.form');

toggleLogin_Register.forEach(btn => {
    btn.addEventListener('click', () => {
        formLogin_Register.forEach(form => {
            form.classList.toggle('active');
        });
    });
});

/* 
------- VALIDAÇÔES LOGIN -------
*/
const formLogin = document.querySelector('.form_login'),
      loginInputUser_Email = document.querySelector('#login_user_email'),
      loginInputPass = document.querySelector('#login_password'),
      btnFormLogin = document.querySelector('#login_btn'),
      loginTextError = document.querySelector('.login_error');

function validateInputsLogin() {
    let userValue = loginInputUser_Email.value;
    let PassValue = loginInputPass.value;

    if (userValue === '' && PassValue === '' ){
        loginTextError.classList.add('invalid');
        loginTextError.innerText = "Preencha os campos abaixo";
        loginInputPass.classList.add('invalid');
        loginInputUser_Email.classList.add('invalid');
    } else if (userValue === '') {
        loginTextError.classList.add('invalid');
        loginTextError.innerText = "Preencha seu usuário ou email corretamente";
        loginInputUser_Email.classList.add('invalid');
    } else if (PassValue === '') {
        loginTextError.classList.add('invalid');
        loginTextError.innerText = "Preencha sua senha corretamente";
        loginInputPass.classList.add('invalid');
    } else {
        loginTextError.classList.remove('invalid');
        loginInputPass.classList.remove('invalid');
        loginInputUser_Email.classList.remove('invalid');
        loginTextError.innerText = "";
    }
}

/* 
------- VALIDAÇÔES REGISTER -------
*/
const registerInputName = document.querySelector('#register_name'),
      registerInputEmail = document.querySelector('#register_email'),
      registerInputPass = document.querySelector('#register_password'),
      registerInputConfirmPass = document.querySelector('#register_confirm_password'),
      formRegister = document.querySelector('.form_register'),
      btnFormRegister = document.querySelector('#register_btn'),
      registerTextError = document.querySelector('.register_error');


function validateInputsRegister () {
    let registerNameValue = registerInputName.value;
    let registerEmailValue = registerInputEmail.value;
    let registerPassValue = registerInputPass.value;
    let registerPassConfirmValue = registerInputConfirmPass.value;

    if (registerNameValue === '' && 
        registerEmailValue === '' && 
        registerPassValue === '' && 
        registerPassConfirmValue === '') {
        registerTextError.classList.add('invalid');
        registerTextError.textContent = "Preencha todos os campos abaixo";
        registerInputName.classList.add('invalid');
        registerInputEmail.classList.add('invalid');
        registerInputPass.classList.add('invalid');
        registerInputConfirmPass.classList.add('invalid');
    } else if (registerNameValue === '') {
        registerTextError.textContent = "Preencha o nome corretamente";
        registerInputName.classList.add('invalid');
    }  else if (registerEmailValue === '') {
        registerTextError.textContent = "Preencha o email corretamente";
        registerInputEmail.classList.add('invalid');
    }  else if (registerPassValue === '' || registerPassConfirmValue === '' || registerPassValue !== registerPassConfirmValue) {
        registerTextError.textContent = "Preencha as senhas corretamente";
        registerInputConfirmPass.classList.add('invalid');
        registerInputPass.classList.add('invalid');
    } else {
        registerInputName.classList.remove('invalid');
        registerInputEmail.classList.remove('invalid');
        registerInputPass.classList.remove('invalid');
        registerInputConfirmPass.classList.remove('invalid');
        loginTextError.innerText = "";
    }
}

btnFormLogin.addEventListener('click', e => {
    e.preventDefault();
    validateInputsLogin();
});

btnFormRegister.addEventListener('click', e => {
    e.preventDefault();
    validateInputsRegister()
});
