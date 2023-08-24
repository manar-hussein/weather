let forcastDay1=``;
let forcastDay2=``;
export class forcastWeather {
    constructor(day,icon,highTemp,lowTemp,condition)
    {
        this.day=day;
        this.icon=icon;
        this.highTemp=highTemp;
        this.lowTemp=lowTemp;
        this.condition=condition;
    }

    displayDay1()
    {
       forcastDay1+=
       `
       <div class="card text-white border border-2 addcard my-3 p-2">
                <div class="cardHeader  d-flex justify-content-center align-items-center border-bottom border-2 py-3 ">
                  <p class=" m-0">${this.day}</p>
                </div>
                <div class="cardBody">
                  <div class="d-flex justify-content-center flex-column align-items-center">
                    <img src="${this.icon}" alt="sun" class="iconwidth2">
                    <h2 class="fw-bolder fs-2 d-flex align-items-center justify-content-center m-0">${this.highTemp} <span class="d-flex fs-3 fw-bolder align-self-start mb-3">o</span>C</h2>
                    <h2 class="fw-bolder fs-4 d-flex align-items-center justify-content-center m-0">${this.lowTemp} <span class="d-flex fs-5 fw-bolder align-self-start mb-3">o</span>C</h2>
                    
                  </div>
                  <p class="py-3 text-center">${this.condition}</p>
                </div>
              </div>
       `
       document.querySelector("#day1Forcast").innerHTML=forcastDay1;
    }

    displayDay2()
    {
        forcastDay2+=
       `
       <div class="card text-white border border-2 addcard my-3 p-2">
                <div class="cardHeader  d-flex justify-content-center align-items-center border-bottom border-2 py-3 ">
                  <p class=" m-0">${this.day}</p>
                </div>
                <div class="cardBody">
                  <div class="d-flex justify-content-center flex-column align-items-center">
                    <img src="${this.icon}" alt="sun" class="iconwidth2">
                    <h2 class="fw-bolder fs-2 d-flex align-items-center justify-content-center m-0">${this.highTemp} <span class="d-flex fs-3 fw-bolder align-self-start mb-3">o</span>C</h2>
                    <h2 class="fw-bolder fs-4 d-flex align-items-center justify-content-center m-0">${this.lowTemp} <span class="d-flex fs-5 fw-bolder align-self-start mb-3">o</span>C</h2>
                    
                  </div>
                  <p class="py-3 text-center">${this.condition}</p>
                </div>
              </div>
       `
       document.querySelector("#day2Forcast").innerHTML=forcastDay2;
    }
}