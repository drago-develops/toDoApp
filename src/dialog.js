//adding dialog and its functinality into the app web.

//creating dialog in html
export { dialogCreation }

const dialogCreation = function(){
    const body = document.querySelector('body');
    const dialogForm = document.createElement('dialog');
    dialogForm.setAttribute('id', 'dialog');

    const heading = document.createElement('div');
    heading.setAttribute('id', 'heading')    
    dialogForm.appendChild(heading);

    const headline = document.createElement('h2')
    headline.textContent = 'Create a new...'
    heading.appendChild(headline);

    const closeButton = document.createElement('button');
    closeButton.setAttribute('id', 'closeDialog');
    closeButton.textContent = 'X';
    heading.appendChild(closeButton);
    closeButton.addEventListener('click', () => {
        dialogForm.close();
    });

    const dialogContainer = document.createElement('div');
    dialogContainer.setAttribute('id', 'dialogContainer');
    dialogForm.appendChild(dialogContainer);


    const options = document.createElement('div');
    options.setAttribute('id', 'options');
    dialogContainer.appendChild(options);

    const dialogDisplay = document.createElement('div');
    dialogDisplay.setAttribute('id', 'dialogDisplay');
    dialogContainer.appendChild(dialogDisplay);

    const dialogMessage = document.createElement('h1');
    dialogMessage.textContent = 'Please click Task or Project button.';
    dialogDisplay.appendChild(dialogMessage);

    const optionToDo = document.createElement('button');
    optionToDo.setAttribute('id', 'addToDoButton');
    optionToDo.textContent = 'Task'
    options.appendChild(optionToDo);
    optionToDo.addEventListener('click', () => {
      dialogTaskDisplay();
    })


    const optionProject = document.createElement('button');
    optionProject.setAttribute('id', 'addProjectButton');
    optionProject.textContent = 'Project'
    options.appendChild(optionProject);
    optionProject.addEventListener('click', () =>{
      dialogProjcetDisplay();
    })

    const formToDo = document.createElement('form')
    formToDo.setAttribute('id', 'toDoFrom');
    
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
  const dialogDisplay = document.getElementById('dialogDisplay');
  const toBeReplaced = dialogDisplay.firstChild

  const form = document.createElement('form');
  form.setAttribute('method', 'dialog');
  toBeReplaced.replaceWith(form);

  const taskFieldset = document.createElement('fieldset');
  taskFieldset.setAttribute('id', 'taskFieldset');
  form.appendChild(taskFieldset);

  //legend for task field
  const taskLegend = document.createElement('legend');
  taskLegend.setAttribute('id', 'taskLegend');
  taskLegend.textContent = 'To Do Task';
  taskFieldset.appendChild(taskLegend);

  //get title of task
  const taskTitleLabel = document.createElement('label');
  taskTitleLabel.setAttribute('for', 'getTaskTitle');
  taskTitleLabel.textContent = 'Title: ';
  taskFieldset.appendChild(taskTitleLabel);

  const taskTitle = document.createElement('input');
  setAttributes(taskTitle, {'type':'input', 'id':'getTaskTitle', 'name':'taskTitle'});
  taskFieldset.appendChild(taskTitle);

  //get brief description for task 
  const taskDescriptionLabel = document.createElement('label');
  taskDescriptionLabel.setAttribute('for','getTaskDescription');
  taskDescriptionLabel.textContent = 'Description: ';
  taskFieldset.appendChild(taskDescriptionLabel);

  const taskDescription = document.createElement('textarea');
  setAttributes(taskDescription, {'id':'getTaskDescription', 'name':'taskDescription', 'maxlength':'100'});
  taskFieldset.appendChild(taskDescription);

  //set dueDate
  const taskDueDateLabel = document.createElement('label');
  taskDueDateLabel.setAttribute('for', 'getTaskDueDate');
  taskDueDateLabel.textContent = 'Due date:';
  taskFieldset.appendChild(taskDueDateLabel);

  const taskDueDate = document.createElement('input');
  setAttributes(taskDueDate, {'type':'date', 'id':'getTaskDueDate', 'name':'taskDueDate'});
  taskFieldset.appendChild(taskDueDate);

  //priority selection for a task
  const divPriorities = document.createElement('div');
  divPriorities.setAttribute('id', 'priorities');
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

};  

//creating project form in a dialog
const dialogProjcetDisplay = function(){
  const dialogDisplay = document.getElementById('dialogDisplay');
  const toBeReplaced = dialogDisplay.firstChild

  const projectFieldset = document.createElement('fieldset');
  projectFieldset.setAttribute('id', 'projectFieldset');
  toBeReplaced.replaceWith(projectFieldset);

  //legend for project field
  const projectLegend = document.createElement('legend');
  projectLegend.setAttribute('id', 'taskLegend');
  projectLegend.textContent = 'Project';
  projectFieldset.appendChild(projectLegend);

  //get title of project
  const projectTitleLabel = document.createElement('label');
  projectTitleLabel.setAttribute('for', 'getProjectTitle');
  projectTitleLabel.textContent = 'Project Title';
  projectFieldset.appendChild(projectTitleLabel);

  const projectTitle = document.createElement('input');
  setAttributes(projectTitle, {'type':'input', 'id':'getProjectTitle', 'name':'projectTitle'});
  projectFieldset.appendChild(projectTitle);
}











