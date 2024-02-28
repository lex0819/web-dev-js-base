'use strict';

/*
Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль 
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
определить, в какую декаду месяца попадает это число и вывести сообщение в 
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
число 32.
*/

const dayNumber = +prompt('Emter integer in the range [1, 32)');
let periodOfMonth = 0;

if (!isNaN(dayNumber) && 1 <= dayNumber && dayNumber < 32) {
    if (dayNumber < 11) {
        periodOfMonth = 1;
    } else if (dayNumber < 21) {
        periodOfMonth = 2;
    } else {
        periodOfMonth = 3;
    }
} else {
    console.log('Your enter is incorrectly.');
}

if (periodOfMonth !== 0) {
    console.log(`Number ${dayNumber} is in ${periodOfMonth} period of month`);
}
