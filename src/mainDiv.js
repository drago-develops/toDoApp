import { myArrayModule } from "./projects.js"
export { homeDisplayButtonFunction }



const homeDisplayButtonFunction = function(){
    const homeDisplayButton = document.querySelector('.allToDos');
    homeDisplayButton.addEventListener('click', () =>{
        blankSlateMainDiv();
        //gets array with all projects (globalProjects/notAssigned aswell) and task in them
        const getProjectsInfo = myArrayModule.getArray();
        taskMainDivPopulate(getProjectsInfo);
    })
}

//checks if the div#main exist and "cleans it" from displayed tasks
//this is done to ensure that tasks are not being duplicated on .main
const blankSlateMainDiv = function(){
    if(document.querySelector('.main') != null){
        document.querySelector('.main').remove();
    };
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'main');
    const body = document.querySelector('body');
    body.appendChild(mainDiv);
}


//function to populate mainDiv by getting task details from myArrayModule.getArray();
const taskMainDivPopulate = function(arr){
    console.log('check log mainDiv')  
    
    //loop to filter through for tasks only and get the details
    for (const i  in arr){
        console.log(arr[i].projectArray)
        for (const j in arr[i].projectArray){
            const taskTitle = arr[i].projectArray[j].title;
            const taskDueDate = arr[i].projectArray[j].dueDate;
            const taskPriority = arr[i].projectArray[j].priority

            console.log(taskTitle);
            //creates task in the mainDiv and displays it with task details  
            const mainDiv = document.querySelector('.main');          
            const taskDiplayMainDiv = document.createElement('div');
            taskDiplayMainDiv.setAttribute('class', 'taskDiplayMainDiv');
            mainDiv.appendChild(taskDiplayMainDiv);

            const taskMainDivTitle = document.createElement('p');
            taskMainDivTitle.textContent = taskTitle;
            taskDiplayMainDiv.appendChild(taskMainDivTitle);

            const taskMainDivDueDate = document.createElement('p');
            taskMainDivDueDate.textContent = taskDueDate;
            taskDiplayMainDiv.appendChild(taskMainDivDueDate);

            const taskMainDivPriority = document.createElement('p');
            taskMainDivPriority.textContent = taskPriority;
            taskDiplayMainDiv.appendChild(taskMainDivPriority);

        }
        
    }    
    
}

