// Object Destructuring and Spread
// Object Destructuring and Spread
// This is beginner-level code. Output is logged to console and shown in the #output-area element.

function show(msg){
    console.log(msg);
    const out = document.getElementById('output-area');
    out.textContent = msg;
}

// --- CODE START ---
document.getElementById('runBtn').addEventListener('click', function(){
    let obj = {a:1, b:2, c:3};
    let {a,b} = obj;
    show('a=' + a + ', b=' + b);
});
// --- CODE END ---
