'use strict';

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const arr3 = [];

for (let index = 0; index < 5; index++) {
    arr3.push(Math.floor(Math.random() * 10));
}

let sum = 0;
arr3.forEach((element) => {
    sum = sum + element;
});

const sumReduce = arr3.reduce((accum, elem) => {
    return accum + elem;
}, 0);

let min = arr3[0];
arr3.forEach((element) => {
    if (element < min) {
        min = element;
    }
});

const minMath = Math.min(...arr3);

const newArr = [];
arr3.forEach((element, index) => {
    if (element === 3) {
        newArr.push(index);
    }
});

console.log('Исходный массив', arr3);
console.log(`Суммa элементов массива: ${sum}`);
console.log(`sumReduce: ${sumReduce}`);
console.log(`Минимальное значение в массиве: ${min}`);
console.log(`minMath: ${minMath}`);
console.log(
    `Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3`,
    newArr
);
