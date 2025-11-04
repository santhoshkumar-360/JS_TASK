// Advanced Array Methods
// Advanced Array Methods
// This is beginner-level code. Output is logged to console and shown in the #output-area element.

function show(msg){
    console.log(msg);
    const out = document.getElementById('output-area');
    out.textContent = msg;
}

// --- CODE START ---
document.getElementById('runBtn').addEventListener('click', function(){
    let a = [5,2,10,7,1];
    let filtered = a.filter(x=>x>5);
    let sum = a.reduce((acc,x)=>acc+x,0);
    let sliced = a.slice(1,4);
    let clone = [...a];
    show('filtered>5: ' + filtered.join(', ') + ' | sum=' + sum + ' | slice 1..3: ' + sliced.join(', ') );
});
// --- CODE END ---
