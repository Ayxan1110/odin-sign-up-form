const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const inputs = document.querySelectorAll("input");

// Mark the confirm field as invalid (with a message) while the passwords differ
function checkPasswords() {
  if (confirmPassword.value !== password.value) {
    confirmPassword.setCustomValidity("Passwords do not match");
  } else {
    confirmPassword.setCustomValidity("");
  }
}

password.addEventListener("input", checkPasswords);
confirmPassword.addEventListener("input", checkPasswords);

// Only used by the CSS fallback: remember which fields the user already visited
inputs.forEach(function (input) {
  input.addEventListener("blur", function () {
    input.classList.add("touched");
  });
});
