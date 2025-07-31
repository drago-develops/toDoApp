import { myArrayModule } from "./projects.js"

const homeDisplay = document.querySelector('.allToDos');
homeDisplay.addEventListener('click', () =>{
    taskMainDivPopulate();
    getTaskDetails();
})

//function to populate mainDiv
const taskMainDivPopulate = function(){

}

//function that will get details of task from projects (project Arrays) 
// and then will be used to fill in the details in taskMainDivPopulate()
const getTaskDetails = function(){
    const getProjectsInfo = myArrayModule.getArray();
    
    for (const i  in getProjectsInfo){
        console.log(getProjectsInfo[i].projectArray)
    }
}