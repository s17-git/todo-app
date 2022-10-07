import state from "../../data/state.js";

export function findTast(id) {

    let task = state.find( (task)=> task.id === id );

    return task;
 
}