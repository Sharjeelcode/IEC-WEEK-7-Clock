let hour = document.getElementById("hour")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let month = document.getElementById("month")
let timeformat = document.getElementById("timeformat")
let button = document.getElementById('btn')

let hourformat24 = false;

//this function is for updating time in veriables
function updatetime() {
    let timeNow = new Date()
    let h = timeNow.getHours()
    let m = timeNow.getMinutes()
    let s = timeNow.getSeconds()
//setting time format in AM and PM
    if (h>=12) {
        timeformat.innerHTML = "PM"
    }else{
        timeformat.innerHTML = "AM"
    }
//Checking and changing time from 24 hour to 12 hour
    if(!hourformat24 && h === 0){
        h += 12
    }else if (!hourformat24 && h > 12) {
        h += - 12
    }
// if time is in single didgit it adds 0 to it   
    let ho = h < 10? "0" + h : h;
    let mi = m < 10 ? "0" + m : m;
    let se = s < 10 ? "0" + s : s;
//Adding elemt to document
    hour.innerHTML = ho
    min.innerHTML = mi
    sec.innerHTML = se

//Updating Day Month Date and Year 
    month.innerHTML =  new Date().toLocaleString('default',{
        weekday : "long",
        month : 'long',
        day : "2-digit",
        year : "numeric"
    })
}

//calling function in setInterval
setInterval(updatetime, 1000)

//this button changes the time format
button.addEventListener('click', ()=>{
    hourformat24 = !hourformat24
    timeformat.classList.toggle("hidden")
   if (button.innerHTML === "24 Hours Format") {
    button.innerHTML = "12 Hours Format"
   }else{
   button.innerHTML = "24 Hours Format"}
    updatetime()
})

