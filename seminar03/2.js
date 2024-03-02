'use strict';

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

function getPayment(num) {
    const payment = num - num * 0.13;
    console.log(`Размер заработной платы за вычетом налогов равен ${payment}.`);
    return payment;
}

const fullCost = +prompt('Введите размер заработной платы: ');

if (!Number.isNaN(fullCost)) {
    getPayment(fullCost);
} else {
    console.log('Значение задано неверно');
}
