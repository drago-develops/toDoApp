import { myArrayModule } from "./projects.js"
export { homeDisplayButtonFunction }

const homeDisplayButtonFunction = function(){
    const homeDisplayButton = document.querySelector('.allToDos');
    homeDisplayButton.addEventListener('click', () =>{
        taskMainDivPopulate();
        getTaskDetails();
    })
}


//function to populate mainDiv
const taskMainDivPopulate = function(){
    console.log('check log mainDiv')
}

//function that will get details of task from projects (project Arrays) 
// and then will be used to fill in the details in taskMainDivPopulate()
const getTaskDetails = function(){
    const getProjectsInfo = myArrayModule.getArray();
    
    for (const i  in getProjectsInfo){
        console.log(getProjectsInfo[i].projectArray)
    }
}