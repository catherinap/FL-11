function addNum(num) {
    return num + 1;
}
function pipe(argument) {
    for (let i = 1; i < arguments.length; i++) {
        argument = arguments[i](argument);
    }
    return argument;
}
pipe(1, addNum, addNum);