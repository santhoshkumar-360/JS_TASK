

function show(msg){
    console.log(msg);
    const out = document.getElementById('output-area');
    out.textContent = msg;
}


document.getElementById('runBtn').addEventListener('click', function(){
    let n = Number(document.getElementById('num').value);
    if (isNaN(n)){ show('Please enter a number'); return; }
    if (n % 2 === 0) show(n + ' is even');
    else show(n + ' is odd');
});

