import "./styles.css"
import "./stylesDialog.css"
import { toDo, changeToDoCompletion, priorityChange, editDescription} from "./toDoTasks.js"
import { project } from "./projects.js"
import { sidebarMenu } from "./sidebar.js"
import { dialogCreation } from "./dialog.js"

dialogCreation();
sidebarMenu();
