function reverseWords() {
    let sentence = document.getElementById("sentence").value;

    // Split the sentence into words, reverse each word, then join back
    let reversedSentence = sentence
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");

    document.getElementById("output").innerHTML = reversedSentence;
}
