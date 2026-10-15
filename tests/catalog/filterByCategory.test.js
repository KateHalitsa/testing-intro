const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]",()=>{
    const result = filterByCategory(products, 'all');

    expect(result).toEqual(products);
  });
  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]",()=>{
    const result = filterByCategory(products, undefined);

    expect(result).toEqual(products);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]",()=>{
    const result = filterByCategory(products, '');

    expect(result).toEqual(products);
  });
  test("'electronics' возвращает товары с ID [1, 2]",()=>{
    const result = filterByCategory(products, 'electronics');

    expect(result).toEqual(products.slice(0, 2));
  });
  test("'books' возвращает товары с ID [3, 6]",()=>{
    const result = filterByCategory(products, 'books');

    expect(result).toEqual([products[2],products[5]]);
  });
  test("'home' возвращает товары с ID [4, 5]",()=>{
    const result = filterByCategory(products, 'home');

    expect(result).toEqual(products.slice(3, 5));
  });
  test("'clothes' возвращает пустой массив",()=>{
    const result = filterByCategory(products, 'clothes');

    expect(result).toEqual([]);
  });
  test("'toys' возвращает пустой массив",()=>{
    const result = filterByCategory(products, 'toys');

    expect(result).toEqual([]);
  });
  test("'sports' возвращает пустой массив",()=>{
    const result = filterByCategory(products, 'sports');

    expect(result).toEqual([]);
  });
});
