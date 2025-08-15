function addNumbers() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let sum = n1 + n2;
    document.getElementById("output").innerHTML = `Addition: ${n1} + ${n2} = ${sum}`;
}

function subtractNumbers() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let diff = n1 - n2;
    document.getElementById("output").innerHTML = `Subtraction: ${n1} - ${n2} = ${diff}`;
}
