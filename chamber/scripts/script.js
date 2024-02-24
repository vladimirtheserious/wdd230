const date = document.querySelector('.year');
const lastModified = document.querySelector('#lastModified');

const options = {
    // month: "long",
    // day: "numeric",	
    year: "numeric"
};

date.innerHTML = new Date().toLocaleDateString("en-US", options);

lastModified.innerHTML = (`Last modification ${document.lastModified}`);


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const header = document.querySelector('header');
const modeButton = document.querySelector('.slider');
const main = document.querySelector('body');
const footer = document.querySelector('footer');
const divs = document.querySelector('div h2');


// modeButton.addEventListener('click', () => {
//     if (modeButton.textContent.includes("🌙")) {
//         main.style.background = "#000";
// 		main.style.color = "#fff";
// 		modeButton.textContent = '🌞';
//     } else {
//         main.style.background = "#eee";
// 		main.style.color = "#000";
// 		modeButton.textContent = "🌙";
//     }
// });

function myFunction() {
    const checkBox = document.querySelector('#myCheck');
    if (checkBox.checked == true) {
        main.style.background = "#000";
		main.style.color = "#fff";
        header.style.background = "#666"
        footer.style.background = '#666'


    } else {
        main.style.background = "#eee";
		main.style.color = "#000";
        header.style.background = "rgb(33, 86, 166)"
        footer.style.background = "rgb(33, 86, 166)"

        
    }
}



