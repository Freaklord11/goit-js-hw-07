const login = document.querySelector('.login-form');

login.addEventListener('submit', checkLogin);

function checkLogin(event)
{
event.preventDefault();

const emailInput = login.elements.email;
const passwordInput = login.elements.password;

if (emailInput.value.trim() === '' || passwordInput.value.trim()===''){
    alert('Please fill in all fields.');
}

const formData = {
    email: emailInput.value,
    password: passwordInput.value
};

console.log(formData);

loginForm.reset();
}

