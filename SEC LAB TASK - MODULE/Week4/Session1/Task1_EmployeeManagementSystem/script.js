function show(msg){
    console.log(msg);
    const out = document.getElementById('output-area');
    out.textContent = msg;
}

let employees = [];
let idCounter = 1;
function renderList(){
    const area = document.getElementById('listArea');
    if (employees.length===0){ area.innerHTML = '<i>No employees</i>'; return;}
    let html = '<table border=1 cellpadding=4><tr><th>ID</th><th>Name</th><th>Position</th><th>Salary</th><th>Dept</th><th>Avail</th><th>Action</th></tr>';
    employees.forEach(emp=>{
        html += `<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.position}</td>
            <td>${emp.salary}</td>
            <td>${emp.department}</td>
            <td>${emp.available}</td>
            <td><button onclick="removeEmployee(${emp.id})">Remove</button>
            <button onclick="toggleAvail(${emp.id})">ToggleAvail</button></td>
          </tr>`;
    });
    html += '</table>';
    area.innerHTML = html;
}
function show(msg){ console.log(msg); document.getElementById('output-area').textContent = msg; }

function addEmployee(){
    const name = document.getElementById('name').value || 'Unnamed';
    const position = document.getElementById('position').value || 'Staff';
    const salary = Number(document.getElementById('salary').value) || 0;
    const department = document.getElementById('department').value;
    const available = document.getElementById('available').checked;
    const emp = { id: idCounter++, name, position, salary, department, available };
    employees.push(emp);
    renderList();
    show('Added: ' + name);
}
function removeEmployee(id){
    employees = employees.filter(e=>e.id!==id);
    renderList();
    show('Removed id ' + id);
}
function toggleAvail(id){
    let emp = employees.find(e=>e.id===id);
    if (emp) emp.available = !emp.available;
    renderList();
    show('Toggled availability for id ' + id);
}
document.getElementById('addBtn').addEventListener('click', addEmployee);
document.getElementById('reportBtn').addEventListener('click', function(){
    // department-wise total salary
    let report = {};
    employees.forEach(e=>{ if(!report[e.department]) report[e.department]=0; report[e.department]+=e.salary; });
    show('Dept report: ' + JSON.stringify(report));
});
document.getElementById('sortBtn').addEventListener('click', function(){
    employees.sort((a,b)=>a.salary-b.salary);
    renderList();
    show('Sorted by salary ascending');
});
document.getElementById('searchBtn').addEventListener('click', function(){
    const q = document.getElementById('search').value.toLowerCase();
    const results = employees.filter(e=>e.name.toLowerCase().includes(q));
    document.getElementById('listArea').innerHTML = results.length ? '<pre>'+JSON.stringify(results,null,2)+'</pre>' : '<i>No results</i>';
    show('Search for ' + q + ' returned ' + results.length + ' items');
});

renderList();

