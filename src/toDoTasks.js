//script to create toDoTask and all their functionalities.

class toDo {
    constructor(title, descritpion, dueDate, complete) {
        this.title = title;
        this.descritpion = descritpion;
        this.dueDate = dueDate;
        this.complete = false;
    }
    
}

function changeToDoCompletion(obj){
    return obj.complete == false ? obj.complete = true : obj.complete = false; 
}




export { toDo , changeToDoCompletion }

