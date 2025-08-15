function removeDuplicates() {
    let input = document.getElementById("arrayInput").value;

    // Convert input string into array of numbers
    let arr = input.split(",").map(num => Number(num.trim()));

    // Use Set to remove duplicates
    let uniqueArr = [...new Set(arr)];

    document.getElementById("output").innerHTML = `Unique Array: [${uniqueArr.join(", ")}]`;
}
