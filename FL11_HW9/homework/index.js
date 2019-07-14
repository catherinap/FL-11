//0_getNumbers
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
//1_findTypes
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
    for (let props in dataTypes) {
        if (dataTypes[props] === 0) {
            delete dataTypes[props];
        }
    }
    return dataTypes;
}
//2_executeForEach
function executeForEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}
//3_mapArray
function mapArray(arr, func) {
    let transformedArr = [];
    executeForEach(arr, item => transformedArr.push(func(item)));
    return transformedArr;
}
//4_filterArray
function filterArray(arr, func) {
    let filteredArray = [];
    executeForEach(arr, item => {
        if (func(item)) {
            filteredArray.push(item);
        }
    });
    return filteredArray;
}
//5_showFormattedDate
function showFormattedDate(formatDate) {
    let months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return `Date: ${months[formatDate.getMonth()]} ${formatDate.getDate()} ${formatDate.getFullYear()}`;
}
//6_canConvertToDate
function canConvertToDate(str) {
    return !isNaN(Date.parse(str));
}
//7_daysBetween
function daysBetween(date1, date2) {
    let s = 3600;
    let ms = 1000;
    let h = 24;
    return Math.round(Math.abs(date2 - date1) / (s * ms * h));
}
//8_getAmountOfAdultPeople
let data = [{
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        ' birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
]
function getAmountOfAdultPeople(data) {
    let age = 18;
    let year = 365;
    let adultCheck = filterArray(data, person => daysBetween(new Date(),
        Date.parse(person[' birthday '])) / year > age).length;
    return adultCheck;
}
//9_keys
function key(keys) {
    let keyArray = [];
    for (let prop in keys) {
        if (keys.hasOwnProperty(prop)) {
            keyArray.push(prop);
        }
    }
}
//10_values
function value(values) {
    let valueArray = [];
    for (let val in values) {
        if (values.hasOwnProperty(val)) {
            valueArray.push(values[val]);
        }
    }
}