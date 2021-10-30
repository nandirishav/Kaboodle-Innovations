const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password');
  const confirmPassword = document.querySelector('#confirm-password');
  const oldPassword = document.querySelector('#old-password');

 
  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});