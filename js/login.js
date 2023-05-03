// 01. Login
// Variáveis

const loginEmailRef = document.querySelector('#email-login');
const loginPasswordRef = document.querySelector('#password-login');
const loginButtonRef = document.querySelector('#buttonLogin');

// Funções

function validateLogin(input) {

    const inputValidate = input.checkValidity();
    const elementFatherRef = input.parentElement;

    if(inputValidate) {
        elementFatherRef.classList.remove('error');
    } else {
        elementFatherRef.classList.add('error');
    }

}

// Eventos

loginEmailRef.addEventListener('keyup', () => validateLogin(loginEmailRef));
loginPasswordRef.addEventListener('keyup', () => validateLogin(loginPasswordRef));