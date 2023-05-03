// 01. Cadastro
// Variáveis

const cadastroNomeRef = document.querySelector('#cadastro-nome');
const cadastroEmailRef = document.querySelector('#cadastro-email');
const cadastroNascimentoRef = document.querySelector('#cadastro-nascimento');
const cadastroPasswordRef = document.querySelector('#cadastro-password');
const cadastroRepeatPasswordRef = document.querySelector('#cadastro-passwordRepeat');

//Funções

function validateLogin(input) {

    const inputValidate = input.checkValidity();
    const elementFatherRef = input.parentElement;

    if(inputValidate) {
        elementFatherRef.classList.remove('error');
    } else {
        elementFatherRef.classList.add('error');
    }

}

function checkPasswords() {

    const elementFatherPasswordRef = cadastroRepeatPasswordRef.parentElement; 

    if(cadastroPasswordRef.value === cadastroRepeatPasswordRef.value) {
        elementFatherPasswordRef.classList.remove('error');
    } else {
        elementFatherPasswordRef.classList.add('error');
    }

}

//Eventos
cadastroNomeRef.addEventListener('keyup', () => validateLogin(cadastroNomeRef));
cadastroEmailRef.addEventListener('keyup', () => validateLogin(cadastroEmailRef));
cadastroNascimentoRef.addEventListener('keyup', () => validateLogin(cadastroNascimentoRef));
cadastroPasswordRef.addEventListener('keyup', () => validateLogin(cadastroPasswordRef));
cadastroRepeatPasswordRef.addEventListener('keyup', () => validateLogin(cadastroRepeatPasswordRef));

cadastroPasswordRef.addEventListener('keyup', () => checkPasswords());
cadastroRepeatPasswordRef.addEventListener('keyup', () => checkPasswords());