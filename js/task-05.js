    let textInput = document.getElementById('name-input');
        
    textInput.addEventListener('input', inputText);

    function  inputText(){
    var inputValue = this.value.trim();
    var nameOutput = document.getElementById('name-output');

    if (inputValue === "") {
        nameOutput.innerText = "Anonymous";
    } else {
        nameOutput.innerText = inputValue;
    }
};
