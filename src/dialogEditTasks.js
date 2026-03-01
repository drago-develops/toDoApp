//dialog for editing tasks

import { projectManager } from './projects.js';

const dialogTaskEditCreation = function() {
    const body = document.querySelector('body');
    const dialogTaskEdit = document.createElement('dialog');
    dialogTaskEdit.setAttribute('class', 'dialogEditTask');
    body.appendChild(dialogTaskEdit);

    const heading = document.createElement('div');
    heading.setAttribute('class', 'heading');
    dialogTaskEdit.appendChild(heading);

    const text = document.createElement('h2');
    text.textContent = 'Edit';
    heading.appendChild(text);

    const closeButton = document.createElement('button');
    closeButton.setAttribute('class', 'closeDialog');
    closeButton.textContent = 'X';
    heading.appendChild(closeButton);
    closeButton.addEventListener('click', () => {
        dialogTaskEdit.close();
    });

    

    const dialogEditDisplay = document.createElement('div');
    dialogEditDisplay.setAttribute('class', 'dialogTaskEditDisplay');
    dialogTaskEdit.appendChild(dialogEditDisplay);

    //function to set multiple attributes
    function setAttributes(el, attrs) {
    for(var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
    }

    const dialogTaskDisplay = function(){
        const dialogDisplay = document.querySelector('.dialogTaskEditDisplay');
        
        //creating form
        const form = document.createElement('form');
        form.setAttribute('method', 'dialog');
        dialogDisplay.replaceWith(form);

        //creating fieldset
        const taskFieldset = document.createElement('fieldset');
        taskFieldset.setAttribute('class', 'taskFieldset');
        form.appendChild(taskFieldset);

        //legend for task field
        const taskLegend = document.createElement('legend');
        taskLegend.setAttribute('class', 'taskLegend');
        taskLegend.textContent = 'To Do Task';
        taskFieldset.appendChild(taskLegend);

        //get title of task
        const taskTitleLabel = document.createElement('label');
        taskTitleLabel.setAttribute('for', 'getTaskTitle');
        taskTitleLabel.textContent = 'Title: ';
        taskFieldset.appendChild(taskTitleLabel);

        //task title
        const taskTitle = document.createElement('input');
        setAttributes(taskTitle, {'type':'input', 'id':'getTaskTitle', 'name':'taskTitle', 'required':''});
        taskFieldset.appendChild(taskTitle);

        //get brief description for task 
        const taskDescriptionLabel = document.createElement('label');
        taskDescriptionLabel.setAttribute('for','getTaskDescription');
        taskDescriptionLabel.textContent = 'Description: ';
        taskFieldset.appendChild(taskDescriptionLabel);

        //task decription
        const taskDescription = document.createElement('textarea');
        setAttributes(taskDescription, {'id':'getTaskDescription', 'name':'taskDescription', 'maxlength':'100', 'required':''});
        taskFieldset.appendChild(taskDescription);

        //set dueDate
        const taskDueDateLabel = document.createElement('label');
        taskDueDateLabel.setAttribute('for', 'getTaskDueDate');
        taskDueDateLabel.textContent = 'Due date:';
        taskFieldset.appendChild(taskDueDateLabel);

        const taskDueDate = document.createElement('input');
        setAttributes(taskDueDate, {'type':'date', 'id':'getTaskDueDate', 'name':'taskDueDate', 'required':''});
        taskFieldset.appendChild(taskDueDate);

        //priority selection for a task
        const divPriorities = document.createElement('div');
        divPriorities.setAttribute('class', 'priorities');
        taskFieldset.appendChild(divPriorities);

        const lowPriority = document.createElement('input');
        setAttributes(lowPriority, {'type':'radio', 'id':'low', 'name':'priority', 'value':'low', 'checked':''});
        divPriorities.appendChild(lowPriority);

        const lowPriorityLabel = document.createElement('label');
        lowPriorityLabel.setAttribute('for', 'low');
        lowPriorityLabel.textContent = 'Low';
        divPriorities.appendChild(lowPriorityLabel);

        const mediumPriority = document.createElement('input');
        setAttributes(mediumPriority, {'type':'radio', 'id':'medium', 'name':'priority', 'value':'medium'});
        divPriorities.appendChild(mediumPriority);

        const mediumPriorityLabel = document.createElement('label');
        mediumPriorityLabel.setAttribute('for', 'low');
        mediumPriorityLabel.textContent = 'Medium'
        divPriorities.appendChild(mediumPriorityLabel);

        const highPriority = document.createElement('input');
        setAttributes(highPriority, {'type':'radio', 'id':'high', 'name':'priority', 'value':'high'});
        divPriorities.appendChild(highPriority);

        const highPriorityLabel = document.createElement('label');
        highPriorityLabel.setAttribute('for', 'low');
        highPriorityLabel.textContent = 'High';
        divPriorities.appendChild(highPriorityLabel);

        //creating drop down selection for task to be added to a project
        const selectProjectLabel = document.createElement('label');
        selectProjectLabel.setAttribute('for', 'projectSelection');
        selectProjectLabel.textContent = 'Choose a project:'
        taskFieldset.appendChild(selectProjectLabel);

        const selectProject = document.createElement('select');
        setAttributes(selectProject, {'id':'projectSelection', 'name':'projectList'});
        taskFieldset.appendChild(selectProject);

        //loop that will add selection options of projects to the drop down
        const projectList = projectManager.getAll();

        for (const i in projectList){
        const variableName  = document.createElement('option');
        variableName.setAttribute('value', `${projectList[i].projectTitle}`);
        variableName.textContent = `${projectList[i].projectTitle}`;
        selectProject.appendChild(variableName);
        }

        //submit button for task
        const submitTaskButton = document.createElement('input');
        setAttributes(submitTaskButton, {'type':'submit', 'class':'submitTaskButton','value':'Edit Task'})
        taskFieldset.appendChild(submitTaskButton);

        submitTaskButton.addEventListener('click', () =>{
        submitTaskButtonFunction();
        console.log(submitTaskButtonFunction().newTask)
        //adding task to a project function
        addTaskToAProject(submitTaskButtonFunction().newTask)
        //storing task in localStorage
        projectJsonToLocalStorage();
        //now task need to be displayed on main div
        blankSlateMainDiv();
        taskMainDivPopulate(projectJsonLocalStorageRetrive());
        })

    }; 
    dialogTaskDisplay();
}

export { dialogTaskEditCreation }