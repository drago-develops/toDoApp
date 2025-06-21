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

    const optionToDo = document.createElement('button');
    optionToDo.setAttribute('id', 'addToDoButton');
    optionToDo.textContent = 'Task'
    options.appendChild(optionToDo);

    const optionProject = document.createElement('button');
    optionProject.setAttribute('id', 'addProjectButton');
    optionProject.textContent = 'Project'
    options.appendChild(optionProject);

    const dialogDisplay = document.createElement('div');
    dialogDisplay.setAttribute('id', 'dialogDisplay');
    dialogContainer.appendChild(dialogDisplay);

    const formToDo = document.createElement('form')
    formToDo.setAttribute('id', 'toDoFrom');
    
    body.appendChild(dialogForm)

    closeButton.addEventListener('click', () => {
        dialogForm.close();
    } )
    
}











