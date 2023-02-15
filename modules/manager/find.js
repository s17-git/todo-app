
export function findTask(id) {

    let task = window.state.find( task => task.id === id );
    return task;
 
}