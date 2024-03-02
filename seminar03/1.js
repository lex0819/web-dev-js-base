'use strict';

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

function cubedNumber(num) {
    return Math.pow(num, 3);
}
const numRandom = Math.floor(Math.random() * 100);
console.log('numRandom', numRandom);
console.log('cubedNumber', cubedNumber(numRandom));
