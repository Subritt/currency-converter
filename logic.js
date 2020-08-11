// Element
const inputElement = document.querySelector('#input');
const convertBtn = document.querySelector('#convert-btn');
const apiTest = document.querySelector('#api-test');

// Event
convertBtn.addEventListener('click', e => {
    e.preventDefault();

    console.log(inputElement.value);

    let usdToNpr = result(input.value);
    addDOM(usdToNpr);

    inputElement.value = '';
});

// Convert currency
let result = amount => {
    return (amount * 119.39);
}

// Add DOM
function addDOM(usdToNpr) {
    let ui = document.createElement('ui');
    ui.classList = 'list-group';
    
    let li = document.createElement('li');
    li.classList = 'list-group-item';
    li.textContent = `Rs.${usdToNpr}`;

    ui.appendChild(li);
    document.querySelector('#result-div').appendChild(ui);

    console.log(ui);
}

// API Call
function getCurrency() {
    fetch('https://api.exchangeratesapi.io/latest')
    .then(res => res.json())
    .then(data => console.log(data));
}