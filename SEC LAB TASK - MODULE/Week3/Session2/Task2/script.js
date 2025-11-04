// Complex Data & Parameter Handling
// Complex Data & Parameter Handling
// This is beginner-level code. Output is logged to console and shown in the #output-area element.

function show(msg){
    console.log(msg);
    const out = document.getElementById('output-area');
    out.textContent = msg;
}

// --- CODE START ---
document.getElementById('runBtn').addEventListener('click', function(){
    let products = [{id:1, name:'Pen', price:10},{id:2,name:'Book',price:120}];
    let names = products.map(p=>p.name);
    show('product names: ' + names.join(', '));
});
// --- CODE END ---
