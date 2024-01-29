// ********Clock***********
let hour = document.getElementById("hour")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let month = document.getElementById("month")
let timeformat = document.getElementById("timeformat")
let format_button = document.getElementById('format-btn')
let stop_button = document.getElementById("stop_button")

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
let time = setInterval(updatetime,1000)

//this button changes the time format
format_button.addEventListener('click', ()=>{
    hourformat24 = !hourformat24
    timeformat.classList.toggle("hidden")
   if (format_button.innerHTML === "24 Hours Format") {
    format_button.innerHTML = "12 Hours Format"
   }else{
    format_button.innerHTML = "24 Hours Format"}
    updatetime()
})
// stop and start watch
stop_button.addEventListener('click',()=>{
    if(stop_button.innerHTML === "Stop watch"){
        clearInterval(time)
        stop_button.innerHTML = "Start watch"
    }else if (stop_button.innerHTML === "Start watch") {
        time = setInterval(updatetime, 1000)
        stop_button.innerHTML = "Stop watch"
    }
});

// ************Stop watch************
let hour_stop = document.getElementById("hour_stop")
let min_stop = document.getElementById("min_stop")
let sec_stop = document.getElementById("sec_stop")
let stop_btn = document.getElementById("stopwatch_btn")
let reset_btn = document.getElementById("reset_btn")
let lap_btn = document.getElementById("lap_btn")
const lap_data = document.getElementById("lap_data")


let second = 0
let mintes = 0
let hours = 0
function stopwatch() {
    function sec() {
        second++
        let s = second < 10 ? "0" + second : second
        sec_stop.innerHTML = s
    }
    sec()

    function mins() {
        if (second === 60) {
            mintes++
            let m = mintes < 10 ? "0" + mintes : mintes
            min_stop.innerHTML = m
            second = 0
        }
    }
    mins()
    function hour() {
        if (mintes === 60) {
            hours++
            let h = hours < 10 ? "0" + hours : hours
            hour_stop.innerHTML = h
            mintes = 0
        }
    }
    hour()
}
let timer;
stop_btn.addEventListener('click', () => {
    if (stop_btn.innerText === "Start") {
        timer = setInterval(stopwatch, 10)
        stop_btn.innerText = "Pause"
    } else if (stop_btn.innerText === "Pause") {
        clearInterval(timer)
        stopwatch_btn.innerText = "Resume"
    } else {
        timer = setInterval(stopwatch, 10)
        stop_btn.innerText = "Pause"
    }
})

//reset timer
reset_btn.addEventListener("click", () => {
    clearInterval(timer)
    second = 0
    mintes = 0
    hours = 0
    hour_stop.innerHTML = "00"
    min_stop.innerHTML = "00"
    sec_stop.innerHTML = "00"
    stopwatch_btn.innerText = "Start"
    lap_data.innerHTML = ""
})

// display laps
lap_btn.addEventListener('click', () => {
    let lap = document.createElement('li')
    lap.className = "bg-white p-2 mb-1 mr-1 rounded"
    lap.innerHTML = `${hours < 10 ? "0" + hours : hours} : ${mintes < 10 ? "0" + mintes : mintes} : ${second < 10 ? "0" + second : second}`
    lap_data.appendChild(lap)
}) 


// ************navigators***********
let stopwatch_div = document.getElementById("stopwatch")
let watch_div = document.getElementById("watch")
function watch_btn() {
    stopwatch_div.classList.add("hidden");
    watch_div.classList.remove("hidden");
    lap_data = document.getElementById('lap_data').innerHTML = ""
   
}

function stopwatchbtn() {
    watch_div.classList.add("hidden");
    stopwatch_div.classList.remove("hidden");
    clearInterval(timer)
    lap_data = document.getElementById('lap_data').innerHTML = ""
    lap_data.innerHTML = ""


}

