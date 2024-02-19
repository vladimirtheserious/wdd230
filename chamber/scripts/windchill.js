const temperature = document.querySelector('.temperature').value;
const wind_speed = document.querySelector('.wind-speed').value;
const btn = document.querySelector('.wind-btn');


btn.addEventListener('click', () => {
    if (temperature <= 50 && wind_speed > 3.0 ) {
        var windChill = (35.74 + (0.6215 * temperature))-(35.75 * Math.pow(wind_speed,0.16)) + (0.4275* temperature * Math.pow(wind_speed,0.16));
   } else {
       var windChill = 'N/A';
   }  
});


var windChill = Math.round(windChill);
document.getElementById('windChill').innerHTML = windChill;
