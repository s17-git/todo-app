import state from "../../data/state.js";

export function findTask(id) {

    let task = state.find( (task)=> task.id === id );

    return task;
 
}