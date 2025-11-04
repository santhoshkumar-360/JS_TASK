// Math & String Built-in Functions
// Math & String Built-in Functions
// This is beginner-level code. Output is logged to console and shown in the #output-area element.

function show(msg){
    console.log(msg);
    const out = document.getElementById('output-area');
    out.textContent = msg;
}

// --- CODE START ---
document.getElementById('runBtn').addEventListener('click', function(){
    let nums = [4.2, 5.7, 1.3];
    let rnd = Math.round(nums[1]);
    let txt = 'Hello World';
    show('round(5.7)=' + rnd + ' | upper: ' + txt.toUpperCase());
});
// --- CODE END ---
