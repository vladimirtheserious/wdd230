const temperature = document.querySelector('.temp').textContent;
const wind_speed = document.querySelector('.wSpeed').textContent;
console.log(wind_speed);
console.log(temperature);


var windChill= (35.74 + (0.6215 * temperature))-(35.75 * Math.pow(wind_speed,0.16))
+ (0.4275*temperature*Math.pow(wind_speed,0.16));

var windChill= Math.round(windChill);

console.log(windChill);
document.querySelector(".weather").textContent= `The wind chill is : ${windChill}`;