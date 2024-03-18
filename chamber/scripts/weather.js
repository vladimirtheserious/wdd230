const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=52.58&lon=-2.12&units=metric&appid=cab02dad90af915e24481955fb63fad0';

if (document.getElementById('forecast')) {
	const getThreeDays = async () => {
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			let dayRange = 0;
			let counter = 0;
			data.list.forEach(item => {
				const date = new Date(item.dt * 1000);
				const day = date.getDate();
				if (dayRange !== day && counter <= 2) {
					counter++;
					dayRange = day;
					addWeatherDetail(item, counter);
				}
			})
		}
	}

	getThreeDays();
}

const addWeatherDetail = (item, dayNumber) => {
	const container = document.getElementById('forecast');
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