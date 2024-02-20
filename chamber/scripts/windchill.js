
function chil() {
const temperature = document.querySelector('.temperature').value*1.8+32;
const wind_speed = document.querySelector('.wind-speed').value/1.609;
// const btn = document.querySelector('.wind-btn');


// btn.addEventListener('onclick', () => {
    let windchill_fahr = 35.74 + 0.6215*temperature - 35.75*(wind_speed**0.16) + 0.4275*temperature*(wind_speed**0.16);
    let windchill_cels = (windchill_fahr - 32)*5/9;
if (temperature<=50 && wind_speed>3){
    document.querySelector('.windchill').innerHTML = Math.round(windchill_cels) + ' ℃';
} 
    else{
        document.querySelector('.windchill').innerHTML = ' N/A';
    }

};