const { expect } = require('expect');
const stockPortfolio = require('./portfolio.js');

beforeEach(() => {
    SP = stockPortfolio.stockPortfolio();
});

test('Testing init empty', () => {
    expectedResult = {};
    newPortfolio = stockPortfolio.stockPortfolio();
    expect(expectedResult).toEqual(newPortfolio);
});

test('check if empty', ()=>{
    expect(stockPortfolio.isEmpty(SP)).toBeTruthy();

});

test('check num of stockholders0', ()=>{

    //stockPortfolio.addStockHolder(pico, 21);
    SP.pico = 1;
    expect(stockPortfolio.numOfStockHolders(SP)).toEqual(1);

});

test('check num of stockholders1', ()=>{
    SP.GME = 5;
    SP.RBLX = 10;
    expect(stockPortfolio.numOfStockHolders(SP)).toEqual(2);
});

test('check num of stockholders2', ()=>{
    expect(stockPortfolio.numOfStockHolders(SP)).toEqual(0);
});

test('confirm adding stock-- user doesnt exist yet', ()=>{
    stockPortfolio.addStock(SP, "pico", 21);
    expect(SP.pico).toEqual(21);
});

test('confirm adding stock-- user exists', ()=>{
    SP["pico"] = 5;
    stockPortfolio.addStock(SP, "pico", 21);
    expect(SP.pico).toEqual(26);
});

test('make a sale for symbol that doesnt exist', ()=>{
    expect(() =>{
        stockPortfolio.removeStock(SP, "pico", 5)}).toThrowError(/Symbol doesnt exist/);
});

test('make a sale for symbol for too much stock', ()=>{
    SP["pico"] = 4;
    expect(() =>{
        stockPortfolio.removeStock(SP, "pico", 5)}).toThrowError(/too much Stock!/);
});

test('make a sale for symbol -- success', ()=>{
    SP["pico"] = 5;
    stockPortfolio.removeStock(SP, "pico", 3);
    expect(SP.pico).toEqual(2);
});

test('make a sale for symbol -- zeroed out', ()=>{
    SP["pico"] = 5;
    stockPortfolio.removeStock(SP, "pico", 5);
    expect(SP.pico).toEqual(undefined);
});

test('return correct number of shares -- not', ()=>{
    stockPortfolio.addStock(SP, "pico", 21);
    expect(stockPortfolio.numOfShares(SP,"pico")).not.toEqual(22);
});

test('return correct number of shares -- success', ()=>{
    stockPortfolio.addStock(SP, "pico", 21);
    expect(stockPortfolio.numOfShares(SP,"pico")).toEqual(21);
});

test('Check number of shares for non-existing stock', () =>{
    const result = stockPortfolio.removeZeroShares(SP, "GME");
    expect(result).toEqual(0);
  });

