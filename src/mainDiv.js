import { projectJsonLocalStorageRetrive } from "./json.js";

const homeDisplayButtonFunction = function () {
    const homeDisplayButton = document.querySelector(".allToDos");
    homeDisplayButton.addEventListener("click", () => {
        blankSlateMainDiv();
        taskMainDivPopulate(projectJsonLocalStorageRetrive());
    });
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
        }
    }
};

export { homeDisplayButtonFunction, taskMainDivPopulate };
