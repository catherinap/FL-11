let a = Number(prompt('Enter length of 1 side of triangle:', ''));
let b = Number(prompt('Enter length of 2 side of triangle:', ''));
let c = Number(prompt('Enter length of 3 side of triangle:', ''));

if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
    console.log('Triangle doesn\'t exist');
} else if (a === b && b === c && a === c) {
    console.log('Equivalent triangle');
} else if (a === b || b === c || a === c) {
    console.log('Isosceles triangle');
} else {
    console.log('Normal triangle');
}