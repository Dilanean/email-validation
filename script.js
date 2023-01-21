const emailLabel = document.getElementById("email-label");
const emailField = document.getElementById("email-field");
const emailError = document.getElementById("email-error");

function validateEmail() {
  emailLabel.style.bottom = "45px";

  if (
    !emailField.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    emailError.innerHTML = "Please enter a valid email";
    emailField.style.borderBottomColor = "red";
    emailError.style.top = "120%";
    return false;
  }
  emailError.innerHTML = "";
  emailField.style.borderBottomColor = "green";
  emailError.style.top = "100%";
}
