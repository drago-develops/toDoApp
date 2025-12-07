import { projectJsonLocalStorageRetrive, projectJsonToLocalStorage } from "./json.js";
import trashCanOutline from "./icons/trashCanOutline.svg";
import { projectManager } from "./projects.js";

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
        projectDisplayMainDiv.appendChild(individaulProjectDisplay);        

        const projectMainDivTitle = document.createElement('h3');
        projectMainDivTitle.textContent = projectItem.projectTitle;
        individaulProjectDisplay.appendChild(projectMainDivTitle);

        for (const task of project.projectArray) {
            const { id, title, dueDate, priority } = task;

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
    }
};

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
            const { title, dueDate, priority } = task;

            const mainDiv = document.querySelector(".main");
            const taskDiplayMainDiv = document.createElement("div");
            taskDiplayMainDiv.setAttribute("class", "taskDiplayMainDiv");
            mainDiv.appendChild(taskDiplayMainDiv);

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

export { homeDisplayButtonFunction, taskMainDivPopulate, projectMainDivPopulate, blankSlateMainDiv, projectDisplayButtonFunction,};
