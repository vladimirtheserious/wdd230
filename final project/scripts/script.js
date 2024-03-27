const date = document.querySelector('.year');

const options = {
    // month: "long",
    // day: "numeric",	
    year: "numeric"
};

date.innerHTML = new Date().toLocaleDateString("en-US", options);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});