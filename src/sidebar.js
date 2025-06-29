export const sidebarMenu = function(){
    
    const divSidebar = document.querySelector('.sidebar');
    const dialog = document.querySelector('.dialog')

    //home button
    const allTodos = document.createElement('button');
    allTodos.setAttribute('class', 'allToDos');
    allTodos.textContent = 'Home';

    divSidebar.appendChild(allTodos);

    //all projects button
    const allProjects = document.createElement('button');
    allProjects.setAttribute('class', 'allProjects');
    allProjects.textContent = "Projects";

    divSidebar.appendChild(allProjects);

    //add button
    const addButton = document.createElement('button');
    addButton.setAttribute('class', 'addButton');
    addButton.textContent = '+';
    addButton.addEventListener('click', () =>{
        dialog.showModal();
    });
    

    divSidebar.appendChild(addButton);
}

