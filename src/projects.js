//script to create projects and all their functionalities as well as adding task to them.
import { projectJsonLocalStorageRetrive } from "./json.js"

class Project {
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        this.projectArray = [];
    }

    addTaskToProject(task) {
        this.projectArray.push(task);
    }

    removeTaskFromProject(task) {
        this.projectArray = this.projectArray.filter(t => t !== task);
    }
}

// This holds all projects in memory
let projects = [];

// Manager object for CRUD operations
const projectManager = {
    getAll: () => [...projects],
    get: (index) => projects[index],
    add: (proj) => projects.push(proj),
    remove: (index) => projects.splice(index, 1),
    setAll: (newProjects) => { projects = newProjects; }
};

// Default global project for unassigned tasks
function projectForNotAssignedTasks() {
    return new Project("not assigned to project");
}

//instantiates array that stores project titles
projectManager.add(projectForNotAssignedTasks()) //adds global project to the myArrayProject as a first item

export { Project, projectManager, projectForNotAssignedTasks };
