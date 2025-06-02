import "./styles.css"
import { toDo, changeToDoCompletion, priorityChange } from "./toDoTasks.js"
import { project } from "./projects.js"

const task1 = new toDo('some task', 'have to complete sometask', '02/05/25')
const task2 = new toDo('new task', 'new task to complete', '03/05/25')
//task1.changeToDoCompletion();
console.log(task1.complete)
// 
changeToDoCompletion(task1)
console.log(task1)
changeToDoCompletion(task1)
console.log(task1.complete)
console.log(task2)

priorityChange(task2)
console.log(task2)
priorityChange(task2)
console.log(task2)
priorityChange(task2)
console.log(task2)

const newProject = new project("newChallange");
console.log(newProject);

newProject.addTaskToProject(task1);
console.log(newProject);

newProject.addTaskToProject(task2);

console.log(newProject)

newProject.removeTaskFromProject(task2);

console.log(newProject);

newProject.removeTaskFromProject(task1);

console.log(newProject);
