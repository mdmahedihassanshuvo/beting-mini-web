function getMoneyByField(inputId){
    const moneyInputField = document.getElementById(inputId);
    const moneyInputFieldString = moneyInputField.value;
    const moneyInputValue = parseFloat(moneyInputFieldString);
    return moneyInputValue;
}

function setValue(elementId, newValue){
    const getElement = document.getElementById(elementId);
    getElement.value = newValue;
}