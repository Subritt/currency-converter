// Element
const inputElement = document.querySelector('#input');
const convertBtn = document.querySelector('#convert-btn');
const apiTest = document.querySelector('#api-test');
const selectElement = document.querySelector('#from');

// Event: form submit
// convertBtn.addEventListener('click', e => {
//     e.preventDefault();
//     getCurrency2();
// });

// Event: form submit
convertBtn.addEventListener('click', e => {
    e.preventDefault();
    getLocation();
});

// Event: type
inputElement.addEventListener('keyup', e => {
    e.preventDefault();
    getCurrency2();
});

// Event: domContentLoad
window.addEventListener('DOMContentLoaded', addCountry);

// Event: API Test Button
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

// Add DOM
function addDOM(result) {
    if(document.querySelector('#result') === null){
        let ui = document.createElement('ui');
        ui.classList = 'list-group';
        
        let li = document.createElement('li');
        li.classList = 'list-group-item mt-4';
        li.id = 'result';
        li.textContent = `${selectElement.value}: ${result}`;
    
        ui.appendChild(li);
        document.querySelector('#result-div').appendChild(ui);

    } else {
        document.querySelector('#result').textContent = `${selectElement.value}: ${result}`;
    }
    // Clear input and selector
    // inputElement.value = '';
    // selectElement.value = '---To---';
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

// Geolocation
function getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(`Latitude: ${position.coords.latitude} and Longitude: ${position.coords.longitude}`);
        // console.log(`test logger`);
    })
}