// Destructuring, Notation & Iteration
// Destructuring, Notation & Iteration
// This is beginner-level code. Output is logged to console and shown in the #output-area element.

function show(msg){
    console.log(msg);
    const out = document.getElementById('output-area');
    out.textContent = msg;
}

// --- CODE START ---
document.getElementById('runBtn').addEventListener('click', function(){
    let user = {name:'Meena', city:'Chennai', age:25};
    let keys = Object.keys(user);
    let vals = Object.values(user);
    show('keys: ' + keys.join(', ') + ' | values: ' + vals.join(', '));
});
// --- CODE END ---
