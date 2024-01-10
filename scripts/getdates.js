const date = document.querySelector('.year');
const lastModified = document.querySelector('#lastModified');

const options = {
    // month: "long",
    // day: "numeric",	
    year: "numeric"
};

date.innerHTML = new Date().toLocaleDateString("en-US", options);

lastModified.innerHTML = (`Last modification ${document.lastModified}`);

