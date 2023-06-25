//first city

function upDatetimeanddate() {

let papeeteElement = document.querySelector("#papeete");
let papeeteDate = papeeteElement.querySelector(".date");
let papeeteTime = papeeteElement.querySelector(".time");


papeeteDate.innerHTML = moment().format("dddd DD of MMMM, YYYY  ");
papeeteTime.innerHTML = moment().tz("Oceania/Papeete").format("hh:mm:ss [<small>A<small>]");






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
newdelhiTime.innerHTML = moment().tz("Asia/NewDelhi").format("hh:mm:ss [<small>A<small>]");

}
setInterval (upDatetimeanddate, 1000);