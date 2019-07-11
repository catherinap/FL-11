function addNum(num) {
    return num + 1;
}
function pipe() {
    let param = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        param = arguments[i](param);
    }
    return param;
}
pipe(1, addNum, addNum);