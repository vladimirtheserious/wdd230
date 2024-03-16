const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#condition');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=52.58&lon=-2.12&units=metric&appid=cab02dad90af915e24481955fb63fad0';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json(); 
            // console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = ` | ${desc}`;
}

apiFetch();