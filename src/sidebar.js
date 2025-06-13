export const sidebarMenu = function(){
    
    const divSidebar = document.querySelector('.sidebar');

    //home button
    const allTodos = document.createElement('button');
    allTodos.setAttribute('id', 'allToDos');
    allTodos.textContent = 'Home';

    divSidebar.appendChild(allTodos);

    //all projects button
    const allProjects = document.createElement('button');
    allProjects.setAttribute('id', 'allProjects');
    allProjects.textContent = "Projects";

    divSidebar.appendChild(allProjects);

    //add button
    const addButton = document.createElement('button');
    addButton.setAttribute('id', 'addButton');
    addButton.textContent = '+';
    

    divSidebar.appendChild(addButton);
}

