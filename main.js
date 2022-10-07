
import { createTask } from "./modules/manager/create.js";

import {init, add} from "./modules/ui/ui.js";


init();

const addBtn = document.querySelector("button");


addBtn.addEventListener('click', (event)=> {

    let task = document.querySelector("#tache").value;
    let deadline = document.querySelector("#deadline").value;
    let description = document.querySelector("#description").value;

    //create task and store in state
    const newTask = createTask(task, deadline, description);

    //add task in UI
    add(newTask);

    
});
