'use strict';

/*
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна
фотография, используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене,
начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести
отсортированный массив в консоль.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

const products04 = [
    {
        id: 3,
        price: 127,
        photos: ['1.jpg', '2.jpg'],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: ['3.jpg'],
    },
    {
        id: 8,
        price: 78,
    },
];

const productsWithPhoto = products04.filter((elem) => elem.photos?.length > 0);
console.log('there are photos', productsWithPhoto);

products04.sort((a, b) => a.price - b.price);
console.log('sort by price', products04);
