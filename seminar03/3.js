'use strict';

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

function getMaxNumber(num01, num02, num03) {
    let maxNum = Math.max(num01, num02);
    maxNum = Math.max(maxNum, num03);
    console.log(
        `Максимальное значение среди чисел ${num01}, ${num02}, ${num03} равно ${maxNum}.`
    );
    return maxNum;
}

const enterNumbers = prompt('Введите три числа через запятую: ');
const listOfNumbers = enterNumbers.split(',');

getMaxNumber(listOfNumbers[0], listOfNumbers[1], listOfNumbers[2]);
