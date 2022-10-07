import state from "../../data/state.js";

export function createTask(task, deadline, description) {

    const newTask = {
        id: crypto.randomUUID(),
        task,
        deadline,
        description,
        statut: 0,
        date: new Date().toLocaleDateString(),
    };


   state.push(newTask);

   return newTask;
 
}