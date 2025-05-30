import "./styles.css"
import { toDo, changeToDoCompletion } from "./toDoTasks.js"

const taks1 = new toDo('some task', 'have to complete sometask', '02/05/25')
const taks2 = new toDo('new task', 'new task to complete', '03/05/25')
//taks1.changeToDoCompletion();
console.log(taks1.complete)
// 
changeToDoCompletion(taks1)
console.log(taks1)
changeToDoCompletion(taks1)
console.log(taks1.complete)
console.log(taks2)