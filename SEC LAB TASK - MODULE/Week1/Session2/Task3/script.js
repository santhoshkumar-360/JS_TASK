

function show(msg){
    console.log(msg);
    const out = document.getElementById('output-area');
    out.textContent = msg;
}

document.getElementById('runBtn').addEventListener('click', function(){
    let res=[];
    for (let i=1;i<=10;i++){
        if (i===6) break; 
        if (i%2===0) continue; 
        res.push(i);
    }
    show('result after break/continue: ' + res.join(', '));
});

