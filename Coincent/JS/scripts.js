document.getElementById('show-password').addEventListener('change', function () {
    const passwordField = document.getElementById('login-password');
    passwordField.type = this.checked ? 'text' : 'password';
});

function showSignUpForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (!username || !password) {
        alert('Please fill out all fields.');
        highlightEmptyFields('loginForm');
        return;
    }

    alert('Logged in successfully!');
    window.location.href = 'welcome.html'; // Redirect to a new page
}

function signUp() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const email = document.getElementById('email').value;

    if (!username || !password || !confirmPassword || !email) {
        alert('Please fill out all fields.');
        highlightEmptyFields('signUpForm');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        document.getElementById('signup-password').style.borderColor = 'red';
        document.getElementById('confirm-password').style.borderColor = 'red';
        return;
    }

    alert('Signed up successfully!');
    window.location.href = 'welcome.html'; // Redirect to a new page
}

function highlightEmptyFields(formId) {
    const form = document.getElementById(formId);
    const inputs = form.getElementsByTagName('input');

    for (let input of inputs) {
        if (!input.value) {
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '#ccc';
        }
    }
}
