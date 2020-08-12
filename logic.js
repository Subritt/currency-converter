// Element
const inputElement = document.querySelector('#input');
const convertBtn = document.querySelector('#convert-btn');
const apiTest = document.querySelector('#api-test');
const selectElement = document.querySelector('#from');

// Event: form submit
convertBtn.addEventListener('click', e => {
    e.preventDefault();
    
    console.log(selectElement.value);
    console.log(inputElement.value);

    getCurrency2();
});

// Event: domContentLoad
window.addEventListener('DOMContentLoaded', addCountry);

// API Test Button
apiTest.addEventListener('click', getCurrency);

// Add Country Selector to select element
function addCountry() {
    fetch('https://api.exchangeratesapi.io/latest')
    .then(res => res.json())
    .then(data => {
        const rates = data.rates;
        Object.keys(rates).forEach(country => {
            const option = document.createElement('option');
            option.textContent = country;
            selectElement.appendChild(option);
        });
    });

}

// Convert currency
let result = amount => {
    return (amount * 119.39);
}

// Add DOM
function addDOM(result) {
    let ui = document.createElement('ui');
    ui.classList = 'list-group';
    
    let li = document.createElement('li');
    li.classList = 'list-group-item mt-4';
    li.textContent = `Rs.${result}`;

    ui.appendChild(li);
    document.querySelector('#result-div').appendChild(ui);

}

// API Call
function getCurrency2() {
    // https://exchangeratesapi.io/
    fetch('https://api.exchangeratesapi.io/latest')
    .then(res => res.json())
    .then(data => {
        const rates = data.rates;
        Object.keys(rates).forEach(key => {
            if(key == selectElement.value){
                const result = inputElement.value * rates[key];
                addDOM(result);
            }
        });

    });
}

// API Call
function getCurrency() {
    // https://exchangeratesapi.io/
    fetch('https://api.exchangeratesapi.io/latest')
    .then(res => res.json())
    .then(data => {
        const rate = data.rates;

        let ui = document.createElement('ui');
        ui.classList = 'list-group mt-4';
        for(let key in rate) {
            let li = document.createElement('li');
            li.classList = 'list-group-item';
            li.textContent = `${key}: ${rate[key]}`;
            
            ui.appendChild(li);
        }
        
        // Append to result div
        document.querySelector('#result-div').appendChild(ui);
    });
}