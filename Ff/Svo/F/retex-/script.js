const openButton = document.getElementsById('openButton');
const callBtn = document.getElementsById('call');
const inputForm = document.getElementById('inputForm');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('closeButton');
const submitButton = document.getElementById('submitButton');
const userInput = document.getElementById('userInput');
const menuBtn = document.querySelector('press')

function openForm() {
    inputForm.style.display = 'block'
    overlay.style.display = 'block'
}

openButton.addEventListener('click',openForm)
callBtn.addEventListener('click',openForm)
menuBtn.addEventListener('click',openForm)

closeButton.addEventListener('click', () => {
    inputForm.style.display = 'none';
    overlay.style.display = 'none';
    userInput.value = ''; 
});

overlay.addEventListener('click', () => {
    inputForm.style.display = 'none';
    overlay.style.display = 'none';
    userInput.value = ''; 
});