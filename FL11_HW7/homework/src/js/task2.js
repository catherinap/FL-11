let maxPocket = 8;
let minPocket = 0;
let prize = 0;
let numbersOfAttempt = 3;
let prizeLow = 25;
let secondAttempt;
let addRange = 4;
let totalPrize = 0;
let prizeCof = 2;
let prizeLowStart = prizeLow;
let rangeStart = 8;
let ask = confirm('Do you want to play a game?');
if (ask === false) {
    alert('You did not become a billionaire, but can.');
} else {
    let pocket = Math.floor(Math.random() * (maxPocket - minPocket) + 1);
    for (let i = 1; i <= numbersOfAttempt; i++) {
        totalPrize = prizeLow * Math.pow(prizeCof, numbersOfAttempt - i);
        let userChoice = Number(prompt('Choose a roulette pocket number from ' +
            minPocket + ' to ' + maxPocket + '\nAttempts left: ' +
            (numbersOfAttempt - i + 1) + '\nTotal prize: ' + prize + '$' +
            '\nPossible prize on current attempt: ' + totalPrize + '$', ''));
        if (userChoice === pocket) {
            prize += totalPrize;
            secondAttempt = confirm('Congratulation, you won! Your prize is: ' +
                prize + '$. \nDo you want to continue?');
            break;
        } else if (i === numbersOfAttempt) {
            prize = 0;
            alert('Thank you for your participation. Your prize is: ' + prize + '$.');
            secondAttempt = confirm('Do you want to play again?');
        }
    }
    if (secondAttempt === false) {
        alert('Thank you for your participation. Your prize is: ' + prize + '$.');
        secondAttempt = confirm('Do you want to play again?');
    } else {
        do {
            if (prize !== 0) {
                maxPocket += addRange;
                prizeLow += prizeLow;
            } else {
                maxPocket = rangeStart;
                prizeLow = prizeLowStart;
            }
            pocket = Math.floor(Math.random() * (maxPocket - minPocket + 1));
            for (let i = 1; i <= numbersOfAttempt; i++) {
                totalPrize = prizeLow * Math.pow(prizeCof, numbersOfAttempt - i);
                let userChoice = Number(prompt('Choose a roulette pocket number from ' +
                    minPocket + ' to ' + maxPocket + '\nAttempts left: ' +
                    (numbersOfAttempt - i + 1) + '\nTotal prize: ' + prize + '$' +
                    '\nPossible prize on current attempt: ' + totalPrize + '$', ''));
                if (userChoice === pocket) {
                    prize += totalPrize;
                    secondAttempt = confirm('Congratulation, you won! Your prize is: ' +
                        prize + '$. \nDo you want to continue?');
                    break;
                } else if (i === numbersOfAttempt) {
                    prize = 0;
                    alert('Thank you for your participation. Your prize is: ' + prize + '$.');
                    secondAttempt = confirm('Do you want to play again?');
                }
            }
        } while (secondAttempt)
    }
}