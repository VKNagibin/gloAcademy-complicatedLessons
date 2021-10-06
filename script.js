"use strict";

// Усложнённое задание №1
const difficultTask1 = function() {

let checkNumber;

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

do {
    checkNumber = prompt('Введите число');
} while (!isNumber(checkNumber));

checkNumber = +checkNumber.toString().trim();
console.log(typeof checkNumber, checkNumber);

};

difficultTask1();


//Усложнённое задание №2