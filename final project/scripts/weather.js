const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.39&lon=-86.94&units=metric&appid=cab02dad90af915e24481955fb63fad0';
const url1 = "https://api.openweathermap.org/data/2.5/weather?lat=20.39&lon=86.94&units=imperial&appid=cab02dad90af915e24481955fb63fad0"
const max_temp = document.querySelector('.max-temp');

if (document.getElementById('weather')) {
	const getTwoDays = async () => {
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			let dayRange = 0;
			let counter = 0;
			data.list.forEach(item => {
				const date = new Date(item.dt * 1000);
				const day = date.getDate();
				if (dayRange !== day && counter <= 1) {
					counter++;
					dayRange = day;
					addWeatherDetail(item, counter);
				}
			})
		}
	}

	getTwoDays();
}

const addWeatherDetail = (item, dayNumber) => {
	const container = document.getElementById('weather');
	const card = document.createElement('div');
	card.setAttribute('class', 'weather-details-wrapper');
    const day = document.createElement('p');
	day.textContent = dayNumber === 1 ? 'Today' : dayNumber === 2 ?
		'Tomorrow' : 'Overtomorrow';
	card.appendChild(day);
    const iconAndTemp = document.createElement('div');
    iconAndTemp.setAttribute('class', 'icon-and-temp');
    card.appendChild(iconAndTemp);
	const icon = document.createElement('img');
	icon.setAttribute('src', `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`);
	icon.setAttribute('alt', item.weather[0].description);
	icon.setAttribute('id', 'weather-icon');
	icon.setAttribute('loading', 'lazy');
	icon.setAttribute('height', '30');
	icon.setAttribute('width', '30');
	iconAndTemp.appendChild(icon);
    const temp = document.createElement('p');
	temp.textContent = item.main.temp.toFixed(0) + '°C';
	iconAndTemp.appendChild(temp);
	const description = document.createElement('p');
	description.textContent = toUpperWords(item.weather[0].description);
	card.appendChild(description);
	container.appendChild(card);
}

const toUpperWords = (str) => {
	return str.split(' ').map(word => word.charAt(0).toUpperCase() +
		word.slice(1)).join(' ');
}

// async function apiFetch() {
//     try {
//         const response = await fetch(url1);
//         if (response.ok) {
//             const data = await response.json();
//             console.log(data);
//             displayResults(data);
//         } else {
//             throw Error(await response.text());
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// function displayResults(data) {
//     max_temp.innerHTML = `${data.list[0].main.temp_max}&deg;F`
//     const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//     let desc = data.weather[0].description;
//     weatherIcon.setAttribute('src', iconsrc);
//     weatherIcon.setAttribute('alt', desc);
//     captionDesc.textContent = `${desc}`;
// }

// apiFetch();
