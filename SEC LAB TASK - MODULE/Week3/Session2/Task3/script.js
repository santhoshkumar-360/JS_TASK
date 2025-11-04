// Function Context & Advanced Calls
// Function Context & Advanced Calls
// This is beginner-level code. Output is logged to console and shown in the #output-area element.

function show(msg){
    console.log(msg);
    const out = document.getElementById('output-area');
    out.textContent = msg;
}

// --- CODE START ---
document.getElementById('runBtn').addEventListener('click', function(){
    function showName(prefix){
        return prefix + this.name;
    }
    let obj = {name:'Ravi'};
    show('call: ' + showName.call(obj, 'Mr. '));
    show('apply: ' + showName.apply(obj, ['Ms. ']));
    let bound = showName.bind(obj, 'Dr. ');
    show('bind: ' + bound());
});