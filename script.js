// logic building Process

// Input
// processing
// Output


const initialPrice = document.querySelector('#intial-price');

const stockQuantity = document.querySelector('#stocks-quantity');

const currentPrice = document.querySelector('currentPrice');

const submitBtn = document.querySelector('#button');

const outputBox = document.querySelector('#output');


// function profit(){
//     const profitValue = currentPrice - initialPrice;
//     return profitValue;
// }

// function profitPr(){
//     const profitPer = (profitValue/initialPrice) * 100;
//     return profitPer;
// }

// function loss(){
//     const lossValue = initialPrice - currentPrice;
//     return lossValue;
// }

// function losspr(){
//     const lossPer = (lossValue/currentPrice)*100;
//     return lossPer;
// }

function calculateProfitLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = initial - current
    }
    else if(initial < current){
        var profit = current - initial;
    }
    else {
        

    }
}