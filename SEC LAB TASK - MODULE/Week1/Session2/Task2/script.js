
function show(msg){
    console.log(msg);
    const out = document.getElementById('output-area');
    out.textContent = msg;
}


document.getElementById('runBtn').addEventListener('click', function(){
    let res = [];
    for (let i=1;i<=5;i++){
        res.push(i);
    }
    show('for loop 1..5 => ' + res.join(', '));
});

