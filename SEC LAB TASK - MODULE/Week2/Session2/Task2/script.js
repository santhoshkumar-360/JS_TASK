// Array Creation and Basic Operations
// Array Creation and Basic Operations
// This is beginner-level code. Output is logged to console and shown in the #output-area element.

function show(msg){
    console.log(msg);
    const out = document.getElementById('output-area');
    out.textContent = msg;
}

// --- CODE START ---
document.getElementById('runBtn').addEventListener('click', function(){
    let arr = [1,2,3];
    arr.push(4);
    arr.shift();
    show('array now: ' + arr.join(', ') + ' | length=' + arr.length);
});
// --- CODE END ---
