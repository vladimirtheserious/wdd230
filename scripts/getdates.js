const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModifiedSpan = document.getElementById('lastModified');
const lastModified = document.lastModified;
lastModifiedSpan.textContent = `Last Modification: ${lastModified}`;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});