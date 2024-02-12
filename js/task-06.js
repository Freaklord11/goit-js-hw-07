document.addEventListener('DOMContentLoaded', function () {
  let inputText = document.getElementById("validation-input");

  inputText.addEventListener('blur', checkText);

  function checkText() {
    let inputCheck = inputText.value.trim().length;
    let lengthGiven = parseInt(inputText.getAttribute("data-length"));

    if (lengthGiven === inputCheck) {
      inputText.classList.remove("invalid");
      inputText.classList.add("valid");
    } else {
      inputText.classList.remove("valid");
      inputText.classList.add("invalid");
    }
  }
});