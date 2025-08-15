function countVowels() {
    let text = document.getElementById("textInput").value;

    // Convert to lowercase and match vowels using regex
    let vowels = text.toLowerCase().match(/[aeiou]/g);

    // Count vowels (if no match, set to 0)
    let count = vowels ? vowels.length : 0;

    document.getElementById("output").innerHTML = `Number of vowels: ${count}`;
}
