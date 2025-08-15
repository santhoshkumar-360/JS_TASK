function validateName() {
    let name = document.getElementById("nameInput").value.trim();

    // Regex: allows only letters (uppercase/lowercase) and spaces
    let namePattern = /^[A-Za-z\s]+$/;

    if (name === "") {
        document.getElementById("output").innerHTML = "Error: Name field cannot be empty.";
        document.getElementById("output").style.color = "red";
    } 
    else if (!namePattern.test(name)) {
        document.getElementById("output").innerHTML = "Invalid: Name can only contain letters and spaces.";
        document.getElementById("output").style.color = "red";
    } 
    else {
        document.getElementById("output").innerHTML = `${name} is valid.`;
        document.getElementById("output").style.color = "green";
    }
}
