// Array Iteration and Loops
// Array Iteration and Loops
// This is beginner-level code. Output is logged to console and shown in the #output-area element.

function show(msg){
    console.log(msg);
    const out = document.getElementById('output-area');
    out.textContent = msg;
}

// --- CODE START ---
document.getElementById('runBtn').addEventListener('click', function(){
    let arr = [1,2,3,4];
    let mapped = arr.map(x=>x*2);
    let printed = [];
    arr.forEach(x=>printed.push(x));
    show('map *2 => ' + mapped.join(', ') + ' | forEach => ' + printed.join(', '));
});
// --- CODE END ---
