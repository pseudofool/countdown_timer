const countdown = () =>{
    const countDate = new Date("May 17, 2023 00:00:00").getTime();
    const now  = new Date().getTime();
    const gap = countDate-now;

    const second = 1000;
    const minute = 60*second;
    const hour = 60*minute;
    const day = 24*hour;

    // calculation
    const textDay = Math.floor(gap/day);
    console.log(textDay);
    const textHour = Math.floor((gap%day)/hour);
    const textMin = Math.floor((gap%hour)/minute);
    const textSec = Math.floor((gap%minute)/second);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMin;
    document.querySelector(".second").innerText = textSec;
}

setInterval(countdown, 1000);
