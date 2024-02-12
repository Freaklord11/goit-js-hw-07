let initValue = 0;

let value = document.getElementById("value");
value.innerText = initValue;

let incBtn  = document.querySelector('[data-action ="increment"]');
let decBtn =  document.querySelector('[data-action ="decrement"]');

incBtn.onclick = () => {
    initValue +=1;
    value.innerText = initValue;
};

decBtn.onclick = () => {
    initValue -=1;
    value.innerText = initValue;
};