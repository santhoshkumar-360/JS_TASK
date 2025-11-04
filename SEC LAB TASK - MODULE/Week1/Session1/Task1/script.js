
function show(msg){
    console.log(msg);
    const out = document.getElementById('output-area');
    out.textContent = msg;
}

document.getElementById('runBtn').addEventListener('click', function(){

    var a = 'Hello (var)';
    let b = 'Hi (let)';
    const c = 'Hey (const)';
    show('var a = ' + a + ' | let b = ' + b + ' | const c = ' + c);
});

