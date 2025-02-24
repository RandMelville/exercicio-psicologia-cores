const form = document.getElementById('loginForm');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

function validateForm(event) {
    event.preventDefault(); 

    let isValid = true;

    if (usernameField.value.trim() === '') {
        usernameField.classList.add('invalid');
        usernameField.classList.remove('valid');
        usernameError.textContent = 'O campo Usuário não pode estar vazio.';
        isValid = false;
    } else {
        usernameField.classList.add('valid');
        usernameField.classList.remove('invalid');
        usernameError.textContent = ''; 
    }

    if (passwordField.value.trim() === '') {
        passwordField.classList.add('invalid');
        passwordField.classList.remove('valid');
        passwordError.textContent = 'O campo Senha não pode estar vazio.';
        isValid = false;
    } else {
        passwordField.classList.add('valid');
        passwordField.classList.remove('invalid');
        passwordError.textContent = ''; 
    }

    if (isValid) {
        alert('Formulário enviado com sucesso!');
        form.reset(); 
    }
}

form.addEventListener('submit', validateForm);