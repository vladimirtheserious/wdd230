const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=cab02dad90af915e24481955fb63fad0";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// apiFetch();


function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp_max}&deg;F`
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();


// function displayMaxTemperature(data) {
// 	currentTemp.innerHTML = `${data.main.temp_max}&deg;F`
//     const iconsrc = `https://openweathermap.org/img/w/${data.main.temp_max.icon}.png`;
//     let desc = data.main.temp_max.description;
//     weatherIcon.setAttribute('src', iconsrc);
//     weatherIcon.setAttribute('alt', desc);
//     captionDesc.textContent = `${desc}`;
// }

//  apiFetch();