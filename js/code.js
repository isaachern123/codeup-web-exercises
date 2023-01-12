// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}


function sayHello(x) {
    if (typeof x === "boolean") {
        return 'Hello, World!'
    }
    if (x === undefined) {
        return 'Hello, World!'
    }
    return 'Hello, ' + x + '!'
}



function isFive(input) {
    return input == 5;
}

function isEven(input) {
    if (input === false) {
        return false
    } else {
        return input % 2 == 0
    }
}


function isVowel(input) {
    if (typeof input !== 'string') {
        return false
    } else {
        return input === 'a' || input === 'e' || input === 'i' || input === 'o' || input === 'u' || input === 'A' || input === 'E' || input === 'I' || input === 'O' || input === 'U';
    }
}


function add(x, y) {
    if (isNaN(x)) {
        return NaN;
    }
    if (isNaN(y)) {
        return NaN;
    } else {
        return parseFloat(x) + parseFloat(y)
    }
}
