let a = +prompt('Enter length of 1 side of triangle:', '');
let b = +prompt('Enter length of 2 side of triangle:', '');
let c = +prompt('Enter length of 3 side of triangle:', '');

if(a === b && b === c && a === c) {
console.log('Equivalent triangle');
} else if(a === b || b === c || a === c) {
    console.log('Isosceles triangle');
} else if(a <= 0 || b <= 0 || c <= 0) {
    console.log('Triangle doesn\'t exist');
} else {
    console.log('Normal triangle');
}
