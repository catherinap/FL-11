let a1 =Number(prompt('Enter first aX coordinate: ', ''));
let a2 =Number(prompt('Enter first aY coordinate: ', ''));
let b1 =Number(prompt('Enter second bX coordinate: ', ''));
let b2 =Number(prompt('Enter second bY coordinate: ', ''));
let c1 =Number(prompt('Enter first cX coordinate: ', ''));
let c2 =Number(prompt('Enter second cY coordinate: ', ''));
let divider = 2;
let cX = (a1 + b1) / divider;
let cY = (a2 + b2) / divider;
if (isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2) || isNaN(c1) || isNaN(c2)) {
   console.log(' Try again and enter just numbers');
} else if (c1 === cX && c2 === cY) {
    console.log(true);
} else {
    console.log(false);
}