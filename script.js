function displaySum () {
    let firstNumberElement = document.getElementById("firstNumber")
    let secondNumberElement = document.getElementById("secondNumber")

    let firstNumberValue = Number(firstNumberElement.value)
    let secondNumberValue = Number(secondNumberElement.value)

    let operationElement = document.getElementById("operation")
    let operationSelected = operationElement.options[operationElement.selectedIndex].value

    let sumElement = document.getElementById("sumText")

    let sumText= getSum(operationSelected,firstNumberValue,secondNumberValue)
    sumElement.textContent = sumText

}


function getSum (operation,firstNumber,secondNumber) {
    switch(operation){
        case "multiply":
            return firstNumber * secondNumber
        case "subtract":
            return firstNumber - secondNumber 
        case "divide":
            return firstNumber / secondNumber
        case "add":
            return firstNumber + secondNumber
        default:
            return ""
    }
}



