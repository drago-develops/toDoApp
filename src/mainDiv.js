import { projectJsonLocalStorageRetrive, projectJsonToLocalStorage } from "./json.js";
import trashCanOutline  from "./icons/trashCanOutline.svg";
import trashCan from "./icons/trashCan.svg";
import { projectManager } from "./projects.js";
import { dialogProjectDeleteCreation } from "./dialogDeleteProjects.js"
import { setPendingProjectDeleteId } from "./deleteState.js";


const homeDisplayButtonFunction = function () {
    const homeDisplayButton = document.querySelector(".allToDos");
    homeDisplayButton.addEventListener("click", () => {
        blankSlateMainDiv();
        taskMainDivPopulate(projectJsonLocalStorageRetrive());
    });
};

const projectDisplayButtonFunction = function () {
    const projectDisplayButton = document.querySelector('.allProjects');
    projectDisplayButton.addEventListener("click", () =>{
        blankSlateMainDiv();
        projectMainDivPopulate(projectJsonLocalStorageRetrive())
    })
};

const projectMainDivPopulate = function (arr) {
    console.log('Populating mainDiv with projects..."')
    
    for (const project of arr) {

        const projectItem = project;

        const mainDiv = document.querySelector(".main");
        const projectDisplayMainDiv = document.createElement('div');
        projectDisplayMainDiv.setAttribute('class', 'projectDisplayMainDiv');
        mainDiv.appendChild(projectDisplayMainDiv);

        const individaulProjectDisplay = document.createElement('div');
        individaulProjectDisplay.setAttribute("class", "individualProjectDisplay");
        individaulProjectDisplay.dataset.projectId = projectItem.id;
        projectDisplayMainDiv.appendChild(individaulProjectDisplay);        

        const projectMainDivTitle = document.createElement('h3');
        projectMainDivTitle.textContent = projectItem.projectTitle;
        individaulProjectDisplay.appendChild(projectMainDivTitle);

        for (const task of project.projectArray) {
            const { id, title, dueDate, priority, descritpion, complete } = task;

            const mainDiv = document.querySelector(".main");
            const taskDiplayMainDiv = document.createElement("div");
            taskDiplayMainDiv.setAttribute("class", "taskDiplayMainDiv");
            individaulProjectDisplay.appendChild(taskDiplayMainDiv);

            taskDiplayMainDiv.dataset.taskId = task.id;
            taskDiplayMainDiv.dataset.projectTitle = projectItem.projectTitle;

            const taskMainDivTitle = document.createElement("p");
            taskMainDivTitle.textContent = title;
            taskDiplayMainDiv.appendChild(taskMainDivTitle);

            const taskMainDivDueDate = document.createElement("p");
            const dueDateHandler  = new Date(dueDate)
            const taskMainDivDueDateMonth = dueDateHandler.getMonth();
            const taskMainDivDueDateDay = dueDateHandler.getDate();
            taskMainDivDueDate.textContent = taskMainDivDueDateDay + " " + monthNames[taskMainDivDueDateMonth];
            taskDiplayMainDiv.appendChild(taskMainDivDueDate);


            const taskMainDivPriority = document.createElement("p");
            taskMainDivPriority.textContent = priority;
            taskDiplayMainDiv.appendChild(taskMainDivPriority);

            const dropDownDetails = document.createElement('details');
            dropDownDetails.setAttribute('class', 'dropDownDetails');
            taskDiplayMainDiv.appendChild(dropDownDetails);

            const detailsSummary = document.createElement('summary');
            detailsSummary.textContent = '';
            dropDownDetails.appendChild(detailsSummary);

            const taskDescription = document.createElement('p');
            taskDescription.setAttribute('class', 'taskSeeDescription');
            taskDescription.textContent = `Description: ${descritpion}`; 
            dropDownDetails.appendChild(taskDescription);

            const taskCompletion = document.createElement('p');
            taskCompletion.setAttribute('class', 'taskSeeCompletion');
            taskCompletion.textContent = `Concluded: ${complete}`;
            dropDownDetails.appendChild(taskCompletion);

            //delete task button from project
            const deleteTaskButton = document.createElement('img');
            deleteTaskButton.setAttribute('class', 'deleteTaskButton')
            deleteTaskButton.src = trashCanOutline;
            deleteTaskButton.setAttribute('height', '20px');
            deleteTaskButton.setAttribute('width', '20px');
            deleteTaskButton.onclick = deleteTaskButtonFunction
            taskDiplayMainDiv.appendChild(deleteTaskButton)

            //colouring task border with priority lvl
            const borderBottomStyleSelector = priorityLvLHandler(priority);
            taskDiplayMainDiv.style.borderBottom = borderBottomStyleSelector;
        }

        //delete project button
        const deleteProjectButton = document.createElement('img');
        deleteProjectButton.setAttribute('class', 'deleteProjectButton')
        deleteProjectButton.src = trashCan;
        deleteProjectButton.setAttribute('height', '20px');
        deleteProjectButton.setAttribute('width', '20px');
        deleteProjectButton.addEventListener("click", (e) => {
            const projectDiv = e.currentTarget.closest(".individualProjectDisplay");
            const projectId = projectDiv.dataset.projectId;

            setPendingProjectDeleteId(projectId);
            deleteProjectDialog();
        });

        individaulProjectDisplay.appendChild(deleteProjectButton)
    }
    removeBinIcon();
};

//a function to remove bin icon from "not assigned to project" since that shouldn't be removed by User
const removeBinIcon = function() {
    const projectBinIconCollection = document.getElementsByClassName('deleteProjectButton');
    const binIcon = projectBinIconCollection[0];
    binIcon.remove();
}

const deleteProjectDialog = function() {
    const dialogProject = document.querySelector(".dialogProjectDelete");
    dialogProject.showModal();
}

const deleteProjectButtonFunction = function(projectId) {
    console.log('deleteProject');
    
    //const projectDiv = event.target.closest(".individualProjectDisplay");

    //const projectId = projectDivId.dataset.projectId;
    const projects = projectManager.getAll();

    //projects = projects.filter(project => project.id !== projectId);
    const index = projects.findIndex(project => project.id === projectId);

    if (index === -1) return;

    projectManager.remove(index);


    // update localStorage
    projectJsonToLocalStorage();

    // refresh UI
    blankSlateMainDiv();
    projectMainDivPopulate(projectJsonLocalStorageRetrive());
}

const deleteTaskButtonFunction = function() {
    console.log("delete img button clicked'")
    // The <img> was clicked → parent is the task div
    const taskDiv = event.target.closest(".taskDiplayMainDiv");

    const taskId = taskDiv.dataset.taskId;
    const projectTitle = taskDiv.dataset.projectTitle;

    // find the correct project
    const projects = projectManager.getAll();
    const project = projects.find(p => p.projectTitle === projectTitle);

    if (!project) return;

    // remove task by ID
    project.projectArray = project.projectArray.filter(task => task.id !== taskId);

    // update localStorage
    projectJsonToLocalStorage();

    // refresh UI
    blankSlateMainDiv();
    projectMainDivPopulate(projectJsonLocalStorageRetrive());
};


const blankSlateMainDiv = function () {
    const existingMain = document.querySelector(".main");
    if (existingMain) existingMain.remove();

    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "main");
    document.body.appendChild(mainDiv);
};

const taskMainDivPopulate = function (arr) {
    console.log("Populating mainDiv with tasks...");

    for (const project of arr) {
        for (const task of project.projectArray) {
            const { id, title, dueDate, priority, descritpion, complete } = task;

            const mainDiv = document.querySelector(".main");
            const taskDiplayMainDiv = document.createElement("div");
            taskDiplayMainDiv.setAttribute("class", "taskDiplayMainDiv");
            mainDiv.appendChild(taskDiplayMainDiv);

            taskDiplayMainDiv.dataset.taskId = task.id;

            const taskMainDivTitle = document.createElement("p");
            taskMainDivTitle.textContent = title;
            taskDiplayMainDiv.appendChild(taskMainDivTitle);

            const taskMainDivDueDate = document.createElement("p");
            const dueDateHandler  = new Date(dueDate)
            const taskMainDivDueDateMonth = dueDateHandler.getMonth();
            const taskMainDivDueDateDay = dueDateHandler.getDate();
            taskMainDivDueDate.textContent = taskMainDivDueDateDay + " " + monthNames[taskMainDivDueDateMonth];
            taskDiplayMainDiv.appendChild(taskMainDivDueDate);

            const taskMainDivPriority = document.createElement("p");
            taskMainDivPriority.textContent = priority;
            taskDiplayMainDiv.appendChild(taskMainDivPriority);

            //drop down icon to see details of toDo
            const dropDownDetails = document.createElement('details');
            dropDownDetails.setAttribute('class', 'dropDownDetails');
            taskDiplayMainDiv.appendChild(dropDownDetails);

            const detailsSummary = document.createElement('summary');
            detailsSummary.textContent = '';
            dropDownDetails.appendChild(detailsSummary);

            const taskDescription = document.createElement('p');
            taskDescription.setAttribute('class', 'taskSeeDescription');
            taskDescription.textContent = `Description: ${descritpion}`; 
            dropDownDetails.appendChild(taskDescription);

            const taskCompletion = document.createElement('p');
            taskCompletion.setAttribute('class', 'taskSeeCompletion');
            taskCompletion.textContent = `Concluded: ${complete}`;
            dropDownDetails.appendChild(taskCompletion);


            //delete task button from project
            const deleteTaskButton = document.createElement('img');
            deleteTaskButton.setAttribute('class', 'deleteTaskButton')
            deleteTaskButton.src = trashCanOutline;
            deleteTaskButton.setAttribute('height', '20px');
            deleteTaskButton.setAttribute('width', '20px');
            deleteTaskButton.onclick = deleteTaskButtonFunction
            taskDiplayMainDiv.appendChild(deleteTaskButton)
            
            //colouring task border with priority lvl
            const borderBottomStyleSelector = priorityLvLHandler(priority)
            taskDiplayMainDiv.style.borderBottom = borderBottomStyleSelector;
        }
    }
};

//month shortcut names for task dueDate display
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

//logic to highlight task priority lvl with colour
function priorityLvLHandler(lvl) {
    const selectorLvl = {
        "low": "solid 3px #008000",
        "medium": "solid 3px #dada23d3",
        "high": "solid 3px #DC143C"
    };
    return selectorLvl[lvl];
}

export { homeDisplayButtonFunction, taskMainDivPopulate, projectMainDivPopulate, blankSlateMainDiv, projectDisplayButtonFunction, deleteProjectButtonFunction };
