class ShareSaleError extends Error {
    constructor(message) {
      super(message);
      this.name = "ShareSaleError";
    }
}

// const { beforeAll } = require("jest-circus");


function stockPortfolio(){
    return {};
}

function isEmpty(SP){
    return Object.keys(SP).length == 0;
}

function addStock(SP, symbol, number){
    if(SP[symbol] != undefined){
        SP[symbol] += number;
    }else{
        SP[symbol] = number;
    }
}

function removeStock(SP, symbol, number){
    if(SP[symbol] == undefined){
        throw new ShareSaleError("Symbol doesnt exist");
    }else if(SP[symbol] < number){
        throw new ShareSaleError("too much Stock!");
    }else{
        SP[symbol] -= number;
        if (SP[symbol] === 0){
            delete SP[symbol];
        }
    }
}

function numOfStockHolders(SP){
    return Object.keys(SP).length;
}

function numOfShares(SP, symbol){
    return SP[symbol];
}

function removeZeroShares(SP, symbol){
    return !SP[symbol] ? 0 : SP[symbol];
};



exports.stockPortfolio = stockPortfolio;
exports.isEmpty = isEmpty;
exports.numOfStockHolders = numOfStockHolders;
exports.addStock = addStock;
exports.removeStock = removeStock;
exports.numOfShares = numOfShares;
exports.removeZeroShares = removeZeroShares;