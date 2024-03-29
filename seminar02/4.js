'use strict';

/*
Необязательное задание.
Если вам показалось домашнее задание простым, выполняем данный пункт.

Необходимо от пользователя получить целое число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

Пример:
Пользователь ввел число 163. Программа должна вывести:
"В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

Пример 2:
Пользователь ввел число 74. Программа должна вывести:
"В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

Пример 3:
Пользователь ввел число 9537. Программа должна вывести:
"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

Уточнение: Пользователь всегда вводит корректное положительное целое число.
Подсказка: Возможно, вам понадобится округление чисел и оператор %.
*/

const myNumber = prompt('Enter integer:');
const myInteger = Number.parseInt(myNumber);

if (!Number.isNaN(myInteger)) {
    const decimalPlaces = [0, 0, 0];
    let decPlace = myInteger;

    for (let i = 0; i < myNumber.length; i++) {
        decimalPlaces[i] = decPlace % 10;
        decPlace = Math.trunc(decPlace / 10);
    }

    console.log(
        `In the number ${myNumber} there are hundreds: ${decimalPlaces[2]}, tens: ${decimalPlaces[1]} and units: ${decimalPlaces[0]}.`
    );
} else {
    console.log('Your enter is incorrect');
}
