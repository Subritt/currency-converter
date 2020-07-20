const inputElement = document.querySelector('#input');
const convertBtn = document.querySelector('#convert-btn');

convertBtn.addEventListener('click', () => {
    console.log(inputElement.value);
    inputElement.value = '';
});