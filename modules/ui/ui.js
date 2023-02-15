
import { findTask } from "../manager/find.js";
import { deleteTask } from "../manager/delete.js";

let tbody = document.querySelector('tbody');

function init() {

    for (const todo of window.state) {
        tbody.innerHTML += `
        <tr id='${todo.id}'>
            
            <td>
                <details>
                    <summary>
                     ${todo.task}
                    </summary>

                    <p class="desc">
                     ${todo.description}   <br>
                      <img  class='edit-icon' src="../imgs/edit.svg"> 
                      <img  class='delete-icon' src="../imgs/delete.svg"> 
                    </p>

                </details>
            </td>
            <td>
                ${todo.date}
            </td>
            <td>
                ${todo.deadline} heures
            </td>
            <td>
                <span class='${statutClass(todo.statut)}'>
                    ${statutClass(todo.statut)}
                </span>
            </td>
        </tr>
    
    `;
        
    }
    
    initEvent();  
}


function statutClass(statut) {
    return statut 
            ?'finish'
            :'in-process';
}


function initEvent() {
    let editIcons = document.querySelectorAll('.edit-icon');

    for (const element of Array.from(editIcons)) {
        
        element.addEventListener('click', editUI);
    }

    let deleteIcons = document.querySelectorAll('.delete-icon');

    for (const element of Array.from(deleteIcons)) {
        
        element.addEventListener('click', deleteTaskUI);
    }
}

function add(todo) {
  
    tbody.innerHTML += `
    <tr id='${todo.id}'>
        
        <td>
            <details>
                <summary>
                    ${todo.task}
                </summary>

                <p class="desc">
                    ${todo.description} 
                    <img  class='edit-icon' src="../imgs/edit.svg"> 
                    <img  class='delete-icon' src="../imgs/delete.svg"> 
                </p>

            </details>

        </td>
        <td>
            ${todo.date}
        </td>
        <td>
            ${todo.deadline} heures
        </td>
        <td>
        <span class='${statutClass(todo.statut)}'>
            ${statutClass(todo.statut)}
        </span>
        </td>
    </tr>
    `;

    initEvent();
}


function deleteTaskUI(ev) {
   
    let amSure = confirm('êtes vous sure ?');
    if(!amSure) return;

    const el = ev.target.parentElement.parentElement.parentElement.parentElement;
    const id = ev.target.parentElement.parentElement.parentElement.parentElement.id;
    const task = findTask(id);

    if(!task) throw new Error('Task Not Found');

    deleteTask(id);

    el.remove();
}

function editUI(ev) {

    let id = ev.target.parentElement.parentElement.parentElement.parentElement.id;
    let todo = findTask(id);

    if(!todo) throw new Error("Task Not Found");

    document.querySelector("#tache").value = todo.task;
    document.querySelector("#deadline").value = todo.deadline;
    document.querySelector("#description").value = todo.description;

    document.querySelector("button").setAttribute('data-btn-state', 'update');
    document.querySelector("button").setAttribute('data-current-task', id);
    document.querySelector("button").innerText = 'Appliquer';

}

 function resetForm() {
    document.querySelector("#tache").value = null;
    document.querySelector("#deadline").value = null;
    document.querySelector("#description").value = null;
}

export {init, add, resetForm};



