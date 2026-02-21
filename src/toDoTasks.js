//script to create toDoTask and all their functionalities.

class toDo {
    constructor(title, descritpion, dueDate, priority , complete) {
        this.title = title;
        this.descritpion = descritpion;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = false;
        this.id = crypto.randomUUID(); //unique identifier        
    }
    
}

function changeToDoCompletion(obj){
    return obj.complete == false ? obj.complete = true : obj.complete = false; 
}

function priorityChange(obj){
    return obj.priority == "low" ? obj.priority = "medium" :
            obj.priority == "medium" ? obj.priority = "high" :
            obj.priority == "high" ? obj.priority = "low" :
            "low" ;
}

function editDescription(obj, input){
    return obj.descritpion = input;
}




export { toDo , changeToDoCompletion, priorityChange, editDescription }

