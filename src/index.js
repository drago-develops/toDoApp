
import "./styles.css";
import "./stylesDialog.css";
import "./stylesMainDiv.css";

import { Project } from "./projects.js";
import { sidebarMenu } from "./sidebar.js";
import { dialogCreation } from "./dialog.js";
import { homeDisplayButtonFunction, taskMainDivPopulate, projectDisplayButtonFunction } from "./mainDiv.js";
import { projectJsonLocalStorageRetrive } from "./json.js";
import { dialogProjectDeleteCreation } from "./dialogDeleteProjects.js"
import { dialogTaskEditCreation } from "./dialogEditTasks.js"

dialogCreation();
dialogTaskEditCreation();
sidebarMenu();
homeDisplayButtonFunction();
projectDisplayButtonFunction();
dialogProjectDeleteCreation();
// Load tasks on startup
taskMainDivPopulate(projectJsonLocalStorageRetrive());