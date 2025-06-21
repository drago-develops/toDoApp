import "./styles.css"
import "./stylesDialog.css"
import { toDo, changeToDoCompletion, priorityChange, editDescription} from "./toDoTasks.js"
import { project } from "./projects.js"
import { sidebarMenu } from "./sidebar.js"
import { dialogCreation } from "./dialog.js"

sidebarMenu();
dialogCreation();

// const addButton = document.getElementById('addButton');
// addButton.addEventListener('click', () =>{
//     dialog.showModal();
// })

// const closeButton = document.getElementById("closeDialog")
// closeButton.addEventListener('click', () => {
//     dialog.close();
// })







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

const task3 = new toDo('some task', 'have to complete sometask', '02/05/25');
console.log(task3)
console.log(task1)
console.log(task1 == task3);

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

newProject.addTaskToProject(task1);
newProject.addTaskToProject(task2);
newProject.addTaskToProject(task3);

console.log(newProject.projectArray[1]);

for (let i = 0; i < newProject.projectArray.length; i++){
    console.log(newProject.projectArray[0] === newProject.projectArray[i])
}

console.log(task1)

editDescription(task1, "this task have to be completed ASAP")

console.log(task1)
