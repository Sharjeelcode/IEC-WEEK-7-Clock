// let hour_stop = document.getElementById("hour_stop")
// let min_stop = document.getElementById("min_stop")
// let sec_stop = document.getElementById("sec_stop")
// let stop_btn = document.getElementById("stopwatch_btn")
// let reset_btn = document.getElementById("reset_btn")
// let lap_btn = document.getElementById("lap_btn")
// const lap_data = document.getElementById("lap_data")


// let second = 0
// let mintes = 0
// let hours = 0
// function stopwatch() {
//     function sec() {
//         second++
//         let s = second < 10 ? "0" + second : second
//         sec_stop.innerHTML = s
//     }
//     sec()

//     function mins() {
//         if (second === 60) {
//             mintes++
//             let m = mintes < 10 ? "0" + mintes : mintes
//             min_stop.innerHTML = m
//             second = 0
//         }
//     }
//     mins()
//     function hour() {
//         if (mintes === 60) {
//             hours++
//             let h = hours < 10 ? "0" + hours : hours
//             hour_stop.innerHTML = h
//             mintes = 0
//         }
//     }
//     hour()
// }
// let timer;
// stop_btn.addEventListener('click', () => {
//     if (stop_btn.innerText === "Start") {
//         timer = setInterval(stopwatch, 10)
//         stop_btn.innerText = "Pause"
//     } else if (stop_btn.innerText === "Pause") {
//         clearInterval(timer)
//         stopwatch_btn.innerText = "Resume"
//     } else {
//         timer = setInterval(stopwatch, 10)
//         stop_btn.innerText = "Pause"
//     }
// })

// //reset timer
// reset_btn.addEventListener("click", () => {
//     clearInterval(timer)
//     second = 0
//     mintes = 0
//     hours = 0
//     hour_stop.innerHTML = "00"
//     min_stop.innerHTML = "00"
//     sec_stop.innerHTML = "00"
//     stopwatch_btn.innerText = "Start"
//     lap_data.innerHTML = ""
// })

// // display laps
// lap_btn.addEventListener('click', () => {
//     let lap = document.createElement('li')
//     lap.innerHTML = `${hours < 10 ? "0" + hours : hours} : ${mintes < 10 ? "0" + mintes : mintes} : ${second < 10 ? "0" + second : second}`
//     lap_data.appendChild(lap)
// })