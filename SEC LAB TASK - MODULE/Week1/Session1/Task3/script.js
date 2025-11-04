

function show(msg){
    console.log(msg);
    const out = document.getElementById('output-area');
    out.textContent = msg;
}

document.getElementById('runBtn').addEventListener('click', function(){
    let x = 10, y = 3;
    let msg = 'x+y=' + (x+y) + ', x%y=' + (x%y) + ', x=="10" -> ' + (x=='10') + ', x==="10" -> ' + (x==='10');
    show(msg);
});

