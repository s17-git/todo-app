import { findTask } from "./find.js";

export function updateTask(id, newTask) {

    let task = findTask(id);

    if(!task) throw new Error('Task Not Found');

   for (const data of window.state) {

        if(data.id === task.id) {
            data.task = newTask.task;
            data.deadline = newTask.deadline;
            data.description = newTask.description;
            data.date = new Date().toLocaleDateString();

            return ;
        }
   }
}
