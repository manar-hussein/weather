import {Weather} from "./weather.js"
import {forcastWeather} from "./forcastWeather.js"
export let today = new Date();
let dayByName=``
let nextFirstDay=``;
let nextSecondDay=``;
function getDayName()
{
    switch (today.getDay()) {
        case 0:
            dayByName=`sunday`;
            nextFirstDay=`monday`
            nextSecondDay=`Tuesday`
            break;
        case 1:
            dayByName=`Monday`;
            nextFirstDay=`Tuesday`
            nextSecondDay=`Wednesday`
            break;
        case 2:
            dayByName=`Tuesday`;
            nextFirstDay=`Wednesday`;
            nextSecondDay=`Thursday`
            break;
        case 3:
            dayByName=`Wednesday`;
            nextFirstDay=`Thursday`;
            nextSecondDay=`Friday`
            break;
        case 4:
            dayByName=`Thursday`;
            nextFirstDay=`Friday`;
            nextSecondDay=`Saturday`
            break;
        case 5:
            dayByName=`Friday`;
            nextFirstDay=`Saturday`;
            nextSecondDay=`sunday`
            break;
        case 6:
            dayByName=`Saturday`;
            nextFirstDay=`sunday`;
            nextSecondDay=`Monday`
            break;
        default:
            break;
    }
    
}
    
    let month=``
    switch (today.getUTCMonth()) {
        case 0:
            month=`jan`;
            break;
        case 1:
            month=`Feb`;
            break;
        case 2:
            month=`March`;
            break;
        case 3:
            month=`Apr`;
            break;
        case 4:
            month=`May`;
            break;
        case 5:
            month=`jun`;
            break;
        case 6:
            month=`July`;
            break;
        case 7:
            month=`Aug`;
            break;
        case 8:
            month=`Sep`;
            break;
        case 9:
            month=`October`;
            break;
        case 10:
            month=`Nov`;
            break;
        case 11:
            month=`Dec`;
            break;
        default:
            break;
    }

async function getWeather(location)
{
    let wethaerInfo=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=fffed32f803045a9a83203730231508&q=${location}&days=3`);
    const Weatherr=await wethaerInfo.json(); 
    let currentWeather = new Weather(dayByName,month,Weatherr.location.name,Weatherr.current.temp_c,Weatherr.current.condition.text,Weatherr.current.condition.icon,Weatherr.current.humidity,Weatherr.current.wind_dir,Weatherr.current.wind_kph);
    currentWeather.display();
    let day1Forcast =new forcastWeather(nextFirstDay,Weatherr.forecast.forecastday[1].day.condition.icon,Weatherr.forecast.forecastday[1].day.maxtemp_c,Weatherr.forecast.forecastday[1].day.mintemp_c,Weatherr.forecast.forecastday[1].day.condition.text);
    day1Forcast.displayDay1();
    let day2Forcast =new forcastWeather(nextSecondDay,Weatherr.forecast.forecastday[2].day.condition.icon,Weatherr.forecast.forecastday[2].day.maxtemp_c,Weatherr.forecast.forecastday[2].day.mintemp_c,Weatherr.forecast.forecastday[2].day.condition.text)
    day2Forcast.displayDay2();
    localStorage.setItem("current",JSON.stringify(currentWeather));
    localStorage.setItem("secondDay",JSON.stringify(day1Forcast));
    localStorage.setItem("third",JSON.stringify(day2Forcast));
     
};
document.querySelector("#findBtn").addEventListener("click",function(e){
    getDayName();
    getWeather(document.querySelector("#location").value)
});





    
