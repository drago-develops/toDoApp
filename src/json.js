//js file to save projects(and toDos/tasks) to localStorage using Json file.
import { myArrayModule } from "./projects.js"
export{ projectJsonToLocalStorage }

//gets array with all projects (globalProjects/notAssigned aswell) and task in them
const getProjectsInfo = myArrayModule.getArray();

const projectJsonToLocalStorage = function(){
    const projectJsonConstant = JSON.stringify(getProjectsInfo);
    console.log(projectJsonConstant);
    localStorage.setItem('projectsInfo', projectJsonConstant);
} 

