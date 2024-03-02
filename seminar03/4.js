'use strict';

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

function addition(num1, num2) {
    return Number(num1 + num2).toFixed(4);
}

function subtraction(num1, num2) {
    if (num1 >= num2) {
        return Number(num1 - num2).toFixed(4);
    } else {
        return Number(num2 - num1).toFixed(4);
    }
}

function multiplication(num1, num2) {
    return Number(num1 * num2).toFixed(4);
}

function division(num1, num2) {
    if (num1 == 0 && num2 == 0) {
        return 'Both number are 0!';
    } else if (num1 == 0) {
        return 0;
    } else if (num2 == 0) {
        return 0;
    } else {
        return Number(num1 / num2).toFixed(4);
    }
}

const randomNum01 = +Number(Math.random() * 100).toFixed(2);
console.log('randomNum01', randomNum01);

const randomNum02 = +Number(Math.random() * 100).toFixed(2);
console.log('randomNum02', randomNum02);

console.log('addition', addition(randomNum01, randomNum02));
console.log('subtraction', subtraction(randomNum01, randomNum02));
console.log('multiplication', multiplication(randomNum01, randomNum02));
console.log('division', division(randomNum01, randomNum02));
