document.getElementById("maintext").addEventListener("input",function(){
    const text = this.value;

    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    document.getElementById("sentencecount").innerText = sentences.length;

    const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0);
    document.getElementById("paragraphcount").innerText = paragraphs.length;

    const wordsArr = text.match(/\b\w+\b/g) || []; 
    const freq = {};
    wordsArr.forEach(word => {
        const w = word.toLowerCase();
        freq[w] = (freq[w] || 0) + 1;
    });

    let mostFrequentWord = "-";
    if (wordsArr.length > 0) {
        const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
        mostFrequentWord = `${sorted[0][0]} (${sorted[0][1]} times)`;
    }
    document.getElementById("freqword").innerText = mostFrequentWord;

});