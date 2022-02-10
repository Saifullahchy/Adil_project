
setInterval(() =>{
    const timePicker = document.getElementById("real-time");
    const dayPicker = document.getElementById("days");
    const monthYearPicker = document.getElementById("years");


    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDay()
    let month = date.getMonth();
    let Todaydate = date.getDate();
    let year = date.getFullYear();
    let day_night = "AM";

    let months = ["January", "February", "March", "April","May","June", "July","August", "September", "October", "November", "December"]
    let days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    
    //day picker 
    dayPicker.innerHTML = days[day + 1];

    //format for real time 
    if(hours => 12){
        day_night= "PM"
    }
    if(hours >  12 ) {
        hours = hours - 12;        
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    timePicker.textContent = hours + ":" + minutes + ":" + seconds + " "+  day_night;
//picks month,days and years 
    monthYearPicker.innerText = months[month] + " " + Todaydate + ", " + year;
})

