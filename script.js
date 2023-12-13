// logic building Process

// Input
// processing
// Output


const initialPrice = document.querySelector('#initial-price');

const stockQuantity = document.querySelector('#stocks-quantity');

const currentPrice = document.querySelector('#current-Price');

const submitBtn = document.querySelector('#button');

const outputBox = document.querySelector('#output');



submitBtn.addEventListener('click' ,submitHandler);

function submitHandler(){
    const ip = initialPrice.value;
    const qty =(stockQuantity.value);
    const curr = (currentPrice.value);

    
    

    if(isNaN(ip)|| isNaN(qty)|| isNaN(curr) ){
        showOutput('enter valid number');
        return;
    }
    calculateProfitLoss(ip, qty, curr);
}


function calculateProfitLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current)*quantity;

        var lossPer = (loss/ (current * quantity)) * 100;

        showOutput(`hey the loss is ${loss} and the percent is ${lossPer.toFixed(2)}%`)
    }
    else if(current > initial){
        var profit = (current - initial)*quantity;
        var profitPer = ((profit / current * quantity))*100;
        showOutput(`hey the profit is ${profit} and profit percentage is ${profitPer.toFixed(2)}%`)
    }
    else {
        showOutput('No pain no gain no gain no pain');
    }
}

function showOutput(message) {
    outputBox.innerHTML = message;
}

