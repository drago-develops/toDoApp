//js file to save projects(and toDos/tasks) to localStorage using Json file.

import { Project, projectManager, projectForNotAssignedTasks } from "./projects.js";


const projectJsonToLocalStorage = function () {
    const projectJsonConstant = JSON.stringify(projectManager.getAll());
    localStorage.setItem("projectsInfo", projectJsonConstant);
};

const projectJsonLocalStorageRetrive = function () {
    const retriveJsonProjects = localStorage.getItem("projectsInfo");

    if (retriveJsonProjects) {
        const parsed = JSON.parse(retriveJsonProjects);

        // Rebuild actual Project instances from parsed data
        const restoredProjects = parsed.map((projData) => {
            const proj = new Project(projData.projectTitle);
            proj.projectArray = projData.projectArray || [];
            return proj;
        });

        projectManager.setAll(restoredProjects);
        return restoredProjects;
    }

};

export { projectJsonToLocalStorage, projectJsonLocalStorageRetrive };


