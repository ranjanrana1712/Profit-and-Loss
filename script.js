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

submitBtn.addEventListener('click' ,submitHandler);

function submitHandler(){
    const ip = Number(initialPrice.value);
    const qty = Number(stockQuantity.value);
    const curr = Number(currentPrice.value);
    calculateProfitLoss(ip, qty, curr);
}

function calculateProfitLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current)*quantity;

        var lossPer = (loss/current) * 100;

        console.log(`hey the loss is ${loss} and the percent is ${lossPer}%`)
    }
    else if(initial < current){
        var profit = (current - initial)*quantity;
        var profitPer = (profit/current)*100;
        console.log(`hey the profit is ${profit} and profit percentage is ${profitPer}%`)
    }
    else {
        console.log('No pain no gain no gain no pain');

    }
}

