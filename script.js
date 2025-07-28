const passwordInput = document.getElementById('password');
const strengthBox = document.getElementById('strength');

passwordInput.addEventListener('input', function () {
  const val = passwordInput.value;
  strengthBox.style.display = 'block';

  let strength = 0;
  if (val.length >= 6) strength++;
  if (val.match(/[A-Z]/)) strength++;
  if (val.match(/[0-9]/)) strength++;
  if (val.match(/[@$!%*?&]/)) strength++;

  if (strength === 0) {
    strengthBox.textContent = '';
    strengthBox.style.display = 'none';
  } else if (strength <= 1) {
    strengthBox.textContent = 'Weak';
    strengthBox.className = 'password-strength strength-weak';
  } else if (strength === 2 || strength === 3) {
    strengthBox.textContent = 'Medium';
    strengthBox.className = 'password-strength strength-medium';
  } else {
    strengthBox.textContent = 'Strong';
    strengthBox.className = 'password-strength strength-strong';
  }
});
