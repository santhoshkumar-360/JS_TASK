// Callback Functions & Scopes
// Callback Functions & Scopes
// This is beginner-level code. Output is logged to console and shown in the #output-area element.

function show(msg){
    console.log(msg);
    const out = document.getElementById('output-area');
    out.textContent = msg;
}

// --- CODE START ---
function doWork(n, cb){
    // simulate work
    let result = n*2;
    cb(result);
}
document.getElementById('runBtn').addEventListener('click', function(){
    let globalVar = 'I am global';
    doWork(5, function(res){
        show('callback received: ' + res + ' | globalVar: ' + globalVar);
    });
});
// --- CODE END ---
