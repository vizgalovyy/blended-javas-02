'use strict';

// task-01
function createProduct(name, price, quantity, tagsString) {
  const newObject = {
    name,
    price,
    quantity,
    available: false,
    tags: tagsString,
  };
  if (newObject.quantity > 0) {
    newObject.available = true;
  } else {
    newObject.available = false;
  }
  newObject.tags = newObject.tags.split(',');
  if (!newObject.tags.includes('popular')) {
    newObject.tags.push('popular');
  }
  return newObject;
}

console.log(createProduct('Навушники', 2500, 8, 'audio,wireless'));
// {
//   name: 'Навушники',
//   price: 2500,
//   quantity: 8,
//   available: true,
//   tags: ['audio', 'wireless', 'popular']
// }

// task-02

const products = [];

function addProduct(products, name, price, quantity, tagsString) {
  products.push(createProduct(name, price, quantity, tagsString));
}

addProduct(products, 'Ноутбук', 32000, 4, 'tech,work');
addProduct(products, 'Навушники', 2500, 8, 'audio,wireless');
addProduct(products, 'Миша', 1200, 3, 'gaming');

console.log(products);
// [
//   {
//     name: 'Ноутбук',
//     price: 32000,
//     quantity: 4,
//     available: true,
//     tags: ['tech', 'work', 'popular']
//   },
//   {
//     name: 'Навушники',
//     price: 2500,
//     quantity: 8,
//     available: true,
//     tags: ['audio', 'wireless', 'popular']
//   },
//   {
//     name: 'Миша',
//     price: 1200,
//     quantity: 3,
//     available: true,
//     tags: ['gaming', 'popular']
//   }
// ]

// task-03
function findProduct(products, productName) {
  for (const product of products) {
    if (product.name.toLowerCase() === productName.toLowerCase()) {
      return product;
    }
  }
  return null;
}

console.log(findProduct(products, 'НАВУШНИКИ'));
// {
//   name: 'Навушники',
//   price: 2500,
//   quantity: 8,
//   available: true,
//   tags: ['audio', 'wireless', 'popular']
// }

console.log(findProduct(products, 'Клавіатура')); // null

// task-04
