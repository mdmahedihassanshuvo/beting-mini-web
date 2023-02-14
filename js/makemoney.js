document.getElementById('double-btn').addEventListener('click', function(){
    const moneyInput = getMoneyByField('money-input')
    if(isNaN(moneyInput)){
        alert('Please input a valid number');
    }
    const makeDouble = moneyInput * moneyInput;
    
    const newInput = setValue('money-input', makeDouble);
    
})

document.getElementById('triple-btn').addEventListener('click', function(){
    const moneyInput = getMoneyByField('money-input')
    if(isNaN(moneyInput)){
        alert('Please input a valid number');
    }

    const makeDouble = moneyInput * moneyInput * moneyInput;
    
    const newInput = setValue('money-input', makeDouble);

})