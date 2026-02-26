//dialog for editing tasks

import { dialogTaskDisplay } from './dialog.js'

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
    dialogEditDisplay.setAttribute('class', 'dialogDisplay');
    dialogTaskEdit.appendChild(dialogEditDisplay);

    dialogTaskDisplay();
}

export { dialogTaskEditCreation }