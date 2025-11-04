// Function Expressions & Arrow Functions
// Function Expressions & Arrow Functions
// This is beginner-level code. Output is logged to console and shown in the #output-area element.

function show(msg){
    console.log(msg);
    const out = document.getElementById('output-area');
    out.textContent = msg;
}

// --- CODE START ---
const square = function(x){ return x*x; };
const cube = x => x*x*x;
document.getElementById('runBtn').addEventListener('click', function(){
    show('square(3)=' + square(3) + ', cube(2)=' + cube(2));
});
// --- CODE END ---
