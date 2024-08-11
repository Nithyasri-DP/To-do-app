let task = document.getElementById("task");
let button = document.getElementById("add");
let ullist = document.getElementById("taskList");
function addnotes(){

let inputfield = task.value.trim();
if(inputfield!="")
{
    let list=document.createElement("li");
    list.textContent=task.value.trim();

    ullist.appendChild(list)
    console.log(task.value)
}
}