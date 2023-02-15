
export function deleteTask(idToDelete) {

    window.state = window.state.filter(({id})=> id != idToDelete);
}