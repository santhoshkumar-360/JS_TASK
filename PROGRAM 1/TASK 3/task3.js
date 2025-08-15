function addNumbers() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    document.getElementById("output").innerHTML = `Addition: ${n1} + ${n2} = ${n1 + n2}`;
}

function subtractNumbers() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    document.getElementById("output").innerHTML = `Subtraction: ${n1} - ${n2} = ${n1 - n2}`;
}

function multiplyNumbers() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    document.getElementById("output").innerHTML = `Multiplication: ${n1} * ${n2} = ${n1 * n2}`;
}

function divideNumbers() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    if (n2 === 0) {
        document.getElementById("output").innerHTML = "Error: Division by zero is not allowed.";
    } else {
        document.getElementById("output").innerHTML = `Division: ${n1} ÷ ${n2} = ${n1 / n2}`;
    }
}
