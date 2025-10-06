//js file to save projects(and toDos/tasks) to localStorage using Json file.

import { projectManager } from "./projects.js";

const projectJsonToLocalStorage = function () {
    const projectJsonConstant = JSON.stringify(projectManager.getAll());
    localStorage.setItem("projectsInfo", projectJsonConstant);
};

const projectJsonLocalStorageRetrive = function () {
    const retriveJsonProjects = localStorage.getItem("projectsInfo");

    if (retriveJsonProjects) {
        const parsed = JSON.parse(retriveJsonProjects);
        projectManager.setAll(parsed);
        return parsed;
    }

};

export { projectJsonToLocalStorage, projectJsonLocalStorageRetrive };


