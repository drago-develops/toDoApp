
import "./styles.css";
import "./stylesDialog.css";
import "./stylesMainDiv.css";

import { Project } from "./projects.js";
import { sidebarMenu } from "./sidebar.js";
import { dialogCreation } from "./dialog.js";
import { homeDisplayButtonFunction, taskMainDivPopulate, projectDisplayButtonFunction} from "./mainDiv.js";
import { projectJsonLocalStorageRetrive } from "./json.js";

dialogCreation();
sidebarMenu();
homeDisplayButtonFunction();
projectDisplayButtonFunction();

// Load tasks on startup
taskMainDivPopulate(projectJsonLocalStorageRetrive());
