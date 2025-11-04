// Working with Objects and Methods
// Working with Objects and Methods
// This is beginner-level code. Output is logged to console and shown in the #output-area element.

function show(msg){
    console.log(msg);
    const out = document.getElementById('output-area');
    out.textContent = msg;
}

// --- CODE START ---
document.getElementById('runBtn').addEventListener('click', function(){
    let student = {id:1, name:'Arun', age:20, info:function(){ return this.name + ' ('+this.age+')'; }};
    show('student info: ' + student.info());
});
// --- CODE END ---
