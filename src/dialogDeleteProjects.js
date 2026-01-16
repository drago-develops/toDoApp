import { deleteProjectButtonFunction } from "./mainDiv.js"
import { getPendingProjectDeleteId, clearPendingProjectDeleteId} from "./deleteState.js";

const dialogProjectDeleteCreation = function(){
    const body = document.querySelector('body');
    const dialogProjectDelete = document.createElement('dialog');
    dialogProjectDelete.setAttribute('class', 'dialogProjectDelete');
    body.appendChild(dialogProjectDelete);

    const heading = document.createElement('div');
    heading.setAttribute('class', 'heading');
    dialogProjectDelete.appendChild(heading);

    const question = document.createElement('h2');
    question.textContent = 'Do you want to delete this project?';
    heading.appendChild(question);

    const closeButton = document.createElement('button');
    closeButton.setAttribute('class', 'closeDialog');
    closeButton.textContent = 'X';
    heading.appendChild(closeButton);
    closeButton.addEventListener('click', () => {
        dialogProjectDelete.close();
    });

    const explanation = document.createElement('p');
    explanation.setAttribute('class', 'explanation');
    explanation.textContent = 'Deleting this project will delete all task in it too';
    dialogProjectDelete.appendChild(explanation);

    const deleteProjectButtonDialog = document.createElement('button');
    deleteProjectButtonDialog.setAttribute('class', 'deleteProjectButtonDialog');
    deleteProjectButtonDialog.textContent = 'Delete'
    dialogProjectDelete.appendChild(deleteProjectButtonDialog);

    deleteProjectButtonDialog.addEventListener('click', () =>{
        const projectId = getPendingProjectDeleteId();

        if (!projectId) return;

        deleteProjectButtonFunction(projectId);
        clearPendingProjectDeleteId();
        dialogProjectDelete.close();
    });

}

export { dialogProjectDeleteCreation }
