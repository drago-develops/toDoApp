import { projectJsonLocalStorageRetrive } from "./json.js";

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
            const { title, dueDate, priority } = task;

            const mainDiv = document.querySelector(".main");
            const taskDiplayMainDiv = document.createElement("div");
            taskDiplayMainDiv.setAttribute("class", "taskDiplayMainDiv");
            individaulProjectDisplay.appendChild(taskDiplayMainDiv);

            const taskMainDivTitle = document.createElement("p");
            taskMainDivTitle.textContent = title;
            taskDiplayMainDiv.appendChild(taskMainDivTitle);

            const taskMainDivDueDate = document.createElement("p");
            taskMainDivDueDate.textContent = dueDate;
            taskDiplayMainDiv.appendChild(taskMainDivDueDate);

            const taskMainDivPriority = document.createElement("p");
            taskMainDivPriority.textContent = priority;
            taskDiplayMainDiv.appendChild(taskMainDivPriority);

            //colouring task border with priority lvl
            const borderBottomStyleSelector = priorityLvLHandler(priority)
            taskDiplayMainDiv.style.borderBottom = borderBottomStyleSelector;
        }
    }
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
            taskMainDivDueDate.textContent = dueDate;
            taskDiplayMainDiv.appendChild(taskMainDivDueDate);

            const taskMainDivPriority = document.createElement("p");
            taskMainDivPriority.textContent = priority;
            taskDiplayMainDiv.appendChild(taskMainDivPriority);

            
            //colouring task border with priority lvl
            const borderBottomStyleSelector = priorityLvLHandler(priority)
            taskDiplayMainDiv.style.borderBottom = borderBottomStyleSelector;
        }
    }
};

//logic to highlight task priority lvl with colour
function priorityLvLHandler(lvl) {
    const selectorLvl = {
        "low": "solid 3px #008000",
        "medium": "solid 3px #dada23d3",
        "high": "solid 3px #DC143C"
    };
    return selectorLvl[lvl];
}

export { homeDisplayButtonFunction, taskMainDivPopulate, projectMainDivPopulate, blankSlateMainDiv, projectDisplayButtonFunction };
