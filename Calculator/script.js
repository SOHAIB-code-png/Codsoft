let operationSet = false;
let operator = "";

function display(value) {
    let inputField = document.getElementById("inputField");
    if (!operationSet) {
        inputField.value += value;
    } else {
        inputField.value += value;
    }
}

function setOperation(op) {
    let inputField = document.getElementById("inputField");
    if (!operationSet) {
        inputField.value += ` ${op} `;
        operationSet = true;
        operator = op;
    }
}

function clearScreen() {
    document.getElementById("inputField").value = "";
    operationSet = false;
    operator = "";
}

function getValue() {
    let inputField = document.getElementById("inputField").value;
    let values = inputField.split(` ${operator} `);
    return values;
}

function calculate() {
    let values = getValue();
    if (values.length === 2) {
        let numX = parseFloat(values[0]);
        let numY = parseFloat(values[1]);
        let result;

        switch (operator) {
            case "x":
                result = numX * numY;
                break;
            case "+":
                result = numX + numY;
                break;
            case "-":
                result = numX - numY;
                break;
            case "÷":
                result = numX / numY;
                break;
            default:
                result = "Error";
        }

        document.getElementById("inputField").value = `${numX} ${operator} ${numY} = ${result}`;
        operationSet = false;
        operator = "";
    } else {
        document.getElementById("inputField").value = "Invalid Input";
    }
}

function clearAll() {
    document.getElementById("inputField").value = "";
    operationSet = false;
    operator = "";
}

function toggleSign() {
    let inputField = document.getElementById("inputField");
    if (inputField.value[0] === "-") {
        inputField.value = inputField.value.substring(1);
    } else {
        inputField.value = "-" + inputField.value;
    }
}
