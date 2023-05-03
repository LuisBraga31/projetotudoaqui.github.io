// 01. Cadastro
// Variáveis

const cadastroNomeRef = document.querySelector('#cadastro-nome');
const cadastroEmailRef = document.querySelector('#cadastro-email');
const cadastroNascimentoRef = document.querySelector('#cadastro-nascimento');
const cadastroPasswordRef = document.querySelector('#cadastro-password');
const cadastroRepeatPasswordRef = document.querySelector('#cadastro-passwordRepeat');
const cadastroButtonRef = document.querySelector('#buttonRegister');

const errorNascimentoRef = document.querySelector('.errorNascimento');

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

function validateDate() {
    const elementFatherDateRef = cadastroNascimentoRef.parentElement; 

    var data = new Date(cadastroNascimentoRef.value);
    var diaAtual = new Date();
    var dateUser = data.getFullYear();
    var dateNow = diaAtual.getFullYear();
    var idade = dateNow - dateUser;

    if(idade >= 119) {
        elementFatherDateRef.classList.add('error'); 
        errorNascimentoRef.innerText = 'Segundo Guinness, a pessoa mais velha tem 118 anos'; 
    } else if(idade < 14) {
        elementFatherDateRef.classList.add('error');
        errorNascimentoRef.innerText = 'Menores de 14 anos não podem ser cadastrar'; 
    } else {
        elementFatherDateRef.classList.remove('error'); 
    }

}

function createAccount() {

    // Por enquanto apenas irá recaminhar para outra página.
    window.location.href = '../pages/login.html';
}

//Eventos
cadastroNomeRef.addEventListener('keyup', () => validateLogin(cadastroNomeRef));
cadastroEmailRef.addEventListener('keyup', () => validateLogin(cadastroEmailRef));
cadastroNascimentoRef.addEventListener('keyup', () => validateLogin(cadastroNascimentoRef));
cadastroPasswordRef.addEventListener('keyup', () => validateLogin(cadastroPasswordRef));
cadastroRepeatPasswordRef.addEventListener('keyup', () => validateLogin(cadastroRepeatPasswordRef));

cadastroPasswordRef.addEventListener('keyup', () => checkPasswords());
cadastroRepeatPasswordRef.addEventListener('keyup', () => checkPasswords());

cadastroNascimentoRef.addEventListener('keyup', () => validateDate());

cadastroButtonRef.addEventListener('click', () => createAccount());