
import { createTask } from "./modules/manager/create.js";
import { updateTask } from "./modules/manager/update.js";
import * as UI from "./modules/ui/ui.js";
import state from "../../data/state.js";

// Il faut eviter cette façon de rendre vos données accessible, 
//vous pouriez utiliser les localStorage ou autres.
// En realiter il faut mieux utiliser un state manager.
window.state = state;

UI.init();

const addBtn = document.querySelector("button");

addBtn.addEventListener('click', (event)=> {

    let task = document.querySelector("#tache");
    let deadline = document.querySelector("#deadline");
    let description = document.querySelector("#description")

    const target = event.target;

    //update task
    if(target.getAttribute('data-btn-state') == 'update') {
        const taskId = target.getAttribute('data-current-task');

         updateTask(taskId, {task: task.value, deadline: deadline.value, description:description.value});
         let tbody = document.querySelector('tbody');
         tbody.innerHTML = '';

         UI.init(); //reset ui


        target.setAttribute('data-btn-state', null);
        target.setAttribute('data-current-task', null);
        UI.resetForm();

        target.innerText = "Ajouter";
        return;
    }
   

    //create task and store in state
    if(!task.value) throw new Error('Impossible de creer un task');
    const newTask = createTask(task.value, deadline.value, description.value);

    //add task in UI
    UI.add(newTask);

    //reset inputs
    UI.resetForm();
});
