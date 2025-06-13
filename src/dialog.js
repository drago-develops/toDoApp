//adding dialog and its functinality into the app web.

export const dialog = function(){
    const body = document.querySelector('body');
    const dialogForm = document.createElement('dialog');
    dialogForm.setAttribute('id', 'dialog');
    const headline = document.createElement('h2')
    headline.textContent = 'Create a new...'
    dialogForm.appendChild(headline);
    const formToDo = document.createElement('form')
    formToDo.setAttribute('id', 'toDoFrom');



    body.appendChild(dialogForm)
}