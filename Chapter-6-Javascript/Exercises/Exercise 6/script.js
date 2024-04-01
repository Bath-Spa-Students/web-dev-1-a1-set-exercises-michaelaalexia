// calculate function

window.onload = () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {input.addEventListener('change', calculate)})
}

function calculate (){
const petrol_price = document.querySelector('#petrol_price').value;
const liters = document.querySelector('#liters').value;

if (!petrol_price || !liters)return;
document.querySelector('#totalAmount').innerText = petrol_price * liters
}