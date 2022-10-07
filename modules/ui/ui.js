import state from "../../data/state.js";
import { findTast } from "../manager/find.js";

let tbody = document.querySelector('tbody');


export function init() {


    for (const todo of state) {
        tbody.innerHTML += `
        <tr >
            
            <td id='${todo.id}'>
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
    

    initEditEvent();
   
}

function statutClass(statut) {
    return statut 
            ?'finish'
            :'in-process';
}


function initEditEvent() {
    let editIcons = document.querySelectorAll('.edit-icon');

    for (const element of Array.from(editIcons)) {
        
        element.addEventListener('click', edit);
    }
}
  
export function add(todo) {
  
    tbody.innerHTML += `
    <tr>
        
        <td id='${todo.id}'>
            <details>
                <summary>
                    ${todo.task}
                </summary>

                <p class="desc">
                    ${todo.description} <img  class='edit-icon' src="../imgs/edit.svg"> 
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

    initEditEvent();
}

export function edit(ev) {

      let id = ev.target.parentElement.parentElement.parentElement.id;
      let todo = findTast(id);

    document.querySelector("#tache").value = todo.task;
    document.querySelector("#deadline").value = todo.deadline;
    document.querySelector("#description").value = todo.description;

    document.querySelector("button").innerText = 'Modifier';

}


