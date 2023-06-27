//first city

function upDatetimeanddate() {

let papeeteElement = document.querySelector("#papeete");
let papeeteDate = papeeteElement.querySelector(".date");
let papeeteTime = papeeteElement.querySelector(".time");


papeeteDate.innerHTML = moment().format("dddd DD of MMMM, YYYY  ");
papeeteTime.innerHTML = moment().tz("Pacific/Tahiti").format("hh:mm:ss [<small>A<small>]");






//second city

let singaporeElement = document.querySelector("#singapore");
let singaporeDate = singaporeElement.querySelector(".date");
let singaporeTime = singaporeElement.querySelector(".time");


singaporeDate.innerHTML = moment().format("dddd DD of MMMM, YYYY  ");
singaporeTime.innerHTML = moment().tz("Asia/Singapore").format("hh:mm:ss [<small>A<small>]");

//third city

let newdelhiElement = document.querySelector("#new-delhi");
let newdelhiDate = newdelhiElement.querySelector(".date");
let newdelhiTime = newdelhiElement.querySelector(".time");


newdelhiDate.innerHTML = moment().format("dddd DD of MMMM, YYYY  ");
newdelhiTime.innerHTML = moment().tz("Asia/Colombo").format("hh:mm:ss [<small>A<small>]");


}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let cityElement = document.querySelector(".cities");
    cityElement.innerHTML = `
    <div class="city">
        <div>
        <h2>${cityName}</h2>
    
    <div class="date">${cityTime.format("dddd DD of MMMM, YYYY  ")}</div></div>
    <div class="time">${cityTime.format("hh:mm:ss")} <small>${cityTime.format("A")}</small></div>
    
    </div>`;}


setInterval(upDatetimeanddate, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity); 
