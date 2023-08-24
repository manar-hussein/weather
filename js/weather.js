import {today} from "./main.js"
//fffed32f803045a9a83203730231508
let weatherDisplay=``
export class Weather
{
    constructor(day,monthe,location,temp,conditionText,conditionIcon,humidity,windDir,windKph)
    {
        this.day=day;
        this.monthe=monthe;
        this.location=location;
        this.temp=temp;
        this.conditionText=conditionText;
        this.conditionIcon=conditionIcon;
        this.humidity=humidity;
        this.windDir=windDir;
        this.windKph=windKph;
    }

    display()
    {
        weatherDisplay+=`
        <div class="card text-white border border-2 addcard my-3 p-2">
        <div class="cardHeader  d-flex justify-content-between align-items-center border-bottom border-2 py-3 ">
          <p class=" m-0">${this.day}</p>
          <p class="m-0">${today.getDate()}${this.monthe}</p>
        </div>
        <div class="cardBody">
          <p>${this.location}</p>
          <div class="d-flex justify-content-between align-items-end">
            <h2 class="fw-bolder display-1 d-flex align-items-center justify-content-center m-0">${this.temp} <span class="d-flex display-4 fw-bolder align-self-start">o</span>C</h2>
            <img src="${this.conditionIcon}" alt="sun" class="iconwidth me-5">
          </div>
          <p class="py-3">${this.conditionText}</p>
        </div>
        <div class="cardFooter d-flex justify-content-between align-items-center">
            <p class="p-0 d-flex align-items-center justify-content-center"><span><i class="fa-solid fa-umbrella fa-lg me-2"></i></span> ${this.humidity}%</p>
            <p class="p-0 d-flex align-items-center justify-content-center"><span><i class="fa-solid fa-wind fa-lg me-2"></i></span> ${this.windKph}km/h</p>
            <p class="p-0 d-flex align-items-center justify-content-center"><span><i class="fa-solid fa-compass fa-lg me-2"></i></span> ${this.windDir}</p>
      
        </div>
      </div>
        `
        document.querySelector("#currentWeather").innerHTML=weatherDisplay;
    }

    
}