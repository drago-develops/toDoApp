import { toDo } from "./toDoTasks.js";
import { Project, projectForNotAssignedTasks, projectManager } from "./projects.js";
import { projectJsonToLocalStorage } from "./json.js";


//adding dialog and its functinality into the app web.

//creating dialog in html
export { dialogCreation }

//creating dialog with js to add it to HTML
const dialogCreation = function(){
    const body = document.querySelector('body');
    const dialogForm = document.createElement('dialog');
    dialogForm.setAttribute('class', 'dialog');

    const heading = document.createElement('div');
    heading.setAttribute('class', 'heading')    
    dialogForm.appendChild(heading);

    const headline = document.createElement('h2')
    headline.textContent = 'Create a new...'
    heading.appendChild(headline);

    const closeButton = document.createElement('button');
    closeButton.setAttribute('class', 'closeDialog');
    closeButton.textContent = 'X';
    heading.appendChild(closeButton);
    closeButton.addEventListener('click', () => {
        dialogForm.close();
    });

    const dialogContainer = document.createElement('div');
    dialogContainer.setAttribute('class', 'dialogContainer');
    dialogForm.appendChild(dialogContainer);


    const options = document.createElement('div');
    options.setAttribute('class', 'options');
    dialogContainer.appendChild(options);

    const dialogDisplay = document.createElement('div');
    dialogDisplay.setAttribute('class', 'dialogDisplay');
    dialogContainer.appendChild(dialogDisplay);

    const dialogMessage = document.createElement('h1');
    dialogMessage.textContent = 'Please click Task or Project button.';
    dialogDisplay.appendChild(dialogMessage);

    const optionToDo = document.createElement('button');
    optionToDo.setAttribute('class', 'addToDoButton');
    optionToDo.textContent = 'Task'
    options.appendChild(optionToDo);
    optionToDo.addEventListener('click', () => {
      dialogTaskDisplay();
    })


    const optionProject = document.createElement('button');
    optionProject.setAttribute('class', 'addProjectButton');
    optionProject.textContent = 'Project'
    options.appendChild(optionProject);
    optionProject.addEventListener('click', () =>{
      dialogProjcetDisplay();
    })

    const formToDo = document.createElement('form')
    formToDo.setAttribute('class', 'toDoFrom');
    
    body.appendChild(dialogForm)

    closeButton.addEventListener('click', () => {
        dialogForm.close();
    } )
    
}

//function to set multiple attributes
function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

//creating task form in a dialog
const dialogTaskDisplay = function(){
  const dialogDisplay = document.querySelector('.dialogDisplay');
  const toBeReplaced = dialogDisplay.firstChild

  //creating form
  const form = document.createElement('form');
  form.setAttribute('method', 'dialog');
  toBeReplaced.replaceWith(form);

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
  setAttributes(submitTaskButton, {'type':'submit', 'class':'submitTaskButton','value':'Add Task'})
  taskFieldset.appendChild(submitTaskButton);

  submitTaskButton.addEventListener('click', () =>{
    submitTaskButtonFunction();
    console.log(submitTaskButtonFunction().newTask)
    //adding task to a project function
    addTaskToAProject(submitTaskButtonFunction().newTask)
    //storing task in localStorage
    projectJsonToLocalStorage();
  })

};  

//function that will add task to a project on a submission
const addTaskToAProject = function(obj){
  const projectSelection = document.getElementById('projectSelection')
  const outputValue = projectSelection.value;
  
  const projectList = projectManager.getAll(); 
  console.log(projectList)
  for (const i in projectList){    
    if(projectList[i].projectTitle == outputValue){
      console.log(projectList[i])
      projectList[i].addTaskToProject(obj);
    } 
  }
}

//creating project form in a dialog
const dialogProjcetDisplay = function(){
  const dialogDisplay = document.querySelector('.dialogDisplay');
  const toBeReplaced = dialogDisplay.firstChild

  //creating form
  const form = document.createElement('form');
  form.setAttribute('method', 'dialog');
  toBeReplaced.replaceWith(form);

  //fieldset for project
  const projectFieldset = document.createElement('fieldset');
  projectFieldset.setAttribute('class', 'projectFieldset');
  form.appendChild(projectFieldset);

  //legend for project field
  const projectLegend = document.createElement('legend');
  projectLegend.setAttribute('class', 'taskLegend');
  projectLegend.textContent = 'Project';
  projectFieldset.appendChild(projectLegend);

  //get title of project
  const projectTitleLabel = document.createElement('label');
  projectTitleLabel.setAttribute('for', 'getProjectTitle');
  projectTitleLabel.textContent = 'Project Title:';
  projectFieldset.appendChild(projectTitleLabel);

  //input for projet title
  const projectTitle = document.createElement('input');
  setAttributes(projectTitle, {'type':'input', 'id':'getProjectTitle', 'name':'projectTitle', 'required':''});
  projectFieldset.appendChild(projectTitle);

  //submit button 
  const submitProjectButton = document.createElement('input');
  setAttributes(submitProjectButton, {'type':'submit', 'class':'submitProjectButton', 'value':'Add Project'});
  projectFieldset.appendChild(submitProjectButton);

  submitProjectButton.addEventListener('click', () => {
    submitProjectButtonFunction();
    //storing project in localStorage
    projectJsonToLocalStorage();
  })
}

//submit button for task form that will instantiate new toDo in the app
const submitTaskButtonFunction = function(){
  const titleValue = document.querySelector('#getTaskTitle')
  const descriptionValue = document.querySelector('#getTaskDescription')
  const dueDateValue = document.querySelector('#getTaskDueDate')
  const prioritieValue = document.querySelector('input[name="priority"]:checked');
  
  const newTask = new toDo(titleValue.value, descriptionValue.value, dueDateValue.value, prioritieValue.value );
  return{ newTask }; //will need that object outside that function to add task to the project in addTaskToAProject();
}

//submit button for project form that will instantiate new project in the app
const submitProjectButtonFunction = function(){
  const projectTitle = document.querySelector('#getProjectTitle');
  const projectTitleValue = projectTitle.value

  const newProject = new Project(projectTitleValue);
  console.log(newProject)
  //adds project to an array function so that it later be used to add task to a project in a dialog in dropdown menu  
  projectManager.add(newProject);
  console.log(projectManager.getAll());
}









