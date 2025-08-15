function validateEmail() {
    let email = document.getElementById("emailInput").value.trim();

    // Simple email regex pattern
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById("output").innerHTML = "Error: Email field cannot be empty.";
        document.getElementById("output").style.color = "red";
    } 
    else if (!emailPattern.test(email)) {
        document.getElementById("output").innerHTML = "Invalid: Invalid email format.";
        document.getElementById("output").style.color = "red";
    } 
    else {
        document.getElementById("output").innerHTML = `${email} is valid.`;
        document.getElementById("output").style.color = "green";
    }
}
