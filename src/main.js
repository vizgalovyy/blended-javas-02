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
