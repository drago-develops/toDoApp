//js file to save projects(and toDos/tasks) to localStorage using Json file.
import { myArrayModule } from "./projects.js"
export{ projectJsonToLocalStorage }

//function to converts project including task array into JSON and stores it in localStorage
const projectJsonToLocalStorage = function(){
    //gets array with all projects (globalProjects/notAssigned aswell) and task in them
    const getProjects = myArrayModule.getArray();
    const projectJsonConstant = JSON.stringify(getProjects);
    localStorage.setItem('projectsInfo', projectJsonConstant);
} 

