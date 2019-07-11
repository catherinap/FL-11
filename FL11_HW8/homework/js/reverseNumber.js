function whileFunc(number, reversed) {
    while (number) {
        number = Math.abs(number);
        reversed = (reversed * 10 + number % 10);
        number = (Math.floor(number / 10));
    }
}
function reverseNumber(number) {
    let reversed = 0;
    if (number > 0) {
        whileFunc();
        return reversed;
    } else {
        whileFunc();
        return reversed * (-1);
    }
}
reverseNumber(-567);

