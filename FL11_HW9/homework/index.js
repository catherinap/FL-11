'use strict';
//getNumbers
function getNumbers(str) {
    let arr = str.split('');
    let del = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            del.push(parseInt(arr[i]));
        }
    }
    return del;
}
//findTypes
function findTypes(...data) {
    let dataTypes = {
        'string': 0,
        'boolean': 0,
        'undefined': 0,
        'number': 0,
        'object': 0
    };
    for (let elem = 0; elem < data.length; elem++) {
        switch (typeof data[elem]) {
            case 'string':
                dataTypes.string += 1;
                break;
            case 'boolean':
                dataTypes.boolean += 1;
                break;
            case 'undefined':
                dataTypes.undefined += 1;
                break;
            case 'number':
                dataTypes.number += 1;
                break;
            case 'object':
                dataTypes.object += 1;
                break;
            default:
                break;
        }
    }
   for(let props in dataTypes) { 
       if(dataTypes[props] === 0) {
         delete dataTypes[props];  
       }
   }
    return dataTypes;
}
//executeForEach
function executeForEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}
//mapArray
function mapArray(arr, func) {
    let transformedArr = [];
    executeForEach(arr, item => transformedArr.push(func(item)));
    return transformedArr;
}
// //filterArray
function filterArray(arr, func) {
    let filteredArray = [];
    executeForEach(arr, item => {
        if (func(item)) {
            filteredArray.push(item);
        }
    });
    return filteredArray;
}
//showFormattedDate
function showFormattedDate(formatDate) {
    let months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; 
    return `Date: ${months[formatDate.getMonth()]} ${formatDate.getDate()} ${formatDate.getFullYear()}`;
}
//canConvertToDate
function canConvertToDate(str) {
    return !isNaN(Date.parse(str));
}