
function add(num1,num2){
    return num1 + num2
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

let calc1 =[];
let calcOperator = false;
let calcOperatorSymbol = [];
let calc3 = [];

function operate(num1,operator,num2){
    if (operator == '+'){
        return add(num1,num2);
    }
    if (operator == '-'){
        return subtract(num1,num2);
    }
    if (operator == '*'){
        return multiply(num1,num2);
    }
    if (operator == '/'){
        return divide(num1,num2);
    }
    else console.log("Incorrect use of operator")

}

const userNumberSelection = document.querySelectorAll(".number")
const userOperatorSelection = document.querySelectorAll(".operator")
const userEqualsSelection = document.querySelectorAll(".equals")
const inputBox = document.querySelector(".inputBox")
const clearButton = document.querySelector(".clearbutton")

clearButton.addEventListener('click', function(e){
    calc1 = []
    calcOperator = false
    calcOperatorSymbol = []
    calc3 = []
    inputBox.textContent = ("")
})


for (let i = 0; i < userNumberSelection.length; i++){
    userNumberSelection[i].addEventListener('click', function(e){
        if (calcOperator === false){
            calc1.push(e.target.textContent)
            inputBox.textContent = calc1.join('')

        } else {
            calc3.push(e.target.textContent)
            inputBox.textContent = calc1.join('') + ' ' + calcOperatorSymbol[0] + ' ' + calc3.join('')
        }
    })
}

for (let i = 0; i < userOperatorSelection.length; i++){
    userOperatorSelection[i].addEventListener('click', function(e){
        calcOperator = true;
        calcOperatorSymbol = [e.target.textContent];
        inputBox.textContent = calc1.join('') + ' ' + calcOperatorSymbol[0];
    })
}

for (let i = 0; i < userEqualsSelection.length; i++){
    userEqualsSelection[i].addEventListener('click', function(e){
        let result = operate(Number(calc1.join('')),calcOperatorSymbol[0],Number(calc3.join('')))
        inputBox.textContent = result
    })
}