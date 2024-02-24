const visits = document.querySelector('.visits');
const lastVist = window.localStorage.getItem("lastVisit");



const currentDate = new Date();

if (!lastVist) {
    visits.textContent = `Welcome! Let us know if you are have any questions.`;
} else {
    const lastVisit = new (Date)(lastVist);
    const timeDifference = currentDate - lastVisit;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    if (daysDifference < 1) {
        visits.textContent = `Back so soon! Awesome!`;
    } else {
        const message = (daysDifference === 1) ? `You last visited 1 day ago.` : `You last visited ${daysDifference} days ago.`;
        visits.textContent = message;
    }

}  

window.localStorage.setItem("lastVisit", currentDate.toString());
    