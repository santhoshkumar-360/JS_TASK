
function show(msg){
    console.log(msg);
    const out = document.getElementById('output-area');
    out.textContent = msg;
}


document.getElementById('runBtn').addEventListener('click', function(){
    let s = '123';
    let n = Number(s); 
    let sum = n + 10;
    show('String s="' + s + '", Number(n)=' + n + ', sum = ' + sum);
});
