
function show(msg){
    console.log(msg);
    const out = document.getElementById('output-area');
    out.textContent = msg;
}

// --- CODE START ---
function greet(name){ return 'Hello, ' + name; }
function sumAll(...nums){ return nums.reduce((a,b)=>a+b,0); }
document.getElementById('runBtn').addEventListener('click', function(){
    show(greet('Student') + ' | sumAll(1,2,3)=' + sumAll(1,2,3));
});
// --- CODE END ---
