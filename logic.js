const inputElement = document.querySelector('#input');
const convertBtn = document.querySelector('#convert-btn');

convertBtn.addEventListener('click', e => {
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