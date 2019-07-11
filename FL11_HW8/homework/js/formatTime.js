function formatTime(num) {
    let days = 0;
    let hours = parseInt(num / 60);
    let minutes = num % 60;
    for (days = 0; hours > 24; days++) {
        hours = hours - 24;
    }
    let string = `${days} day(s) ${hours} hour(s) ${minutes} minute(s).`;
    return string;
}
formatTime(61);