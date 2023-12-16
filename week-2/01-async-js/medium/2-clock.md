function timer() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours>=12? 'PM':'AM';
    let formattedHours = hours;
    if(hours>12) {
        formattedHours -= 12;
    }
    else if(hours===0) {
        formattedHours += 12;

    }
    const timeStr = `\r${formattedHours}:${minutes}:${seconds} ${ampm}`;
    process.stdout.write(timeStr.toString());
}

setInterval(timer,1000);