//script to create projects and all their functionalities as well as adding task to them.

class project {
    constructor(projectTitle){
        this.projectTitle = projectTitle
        this.projectArray = []
    }

    //add a toDo to the project
    addTaskToProject(obj){
        return this.projectArray.push(obj)
    }

    //remove task toDo from the project 
    removeTaskFromProject(obj){
        for (let i=0; i < this.projectArray.length; i++){
            if (this.projectArray[i] == obj ){
                const indexOfObj = this.projectArray.indexOf(this.projectArray[i])
                this.projectArray.splice(indexOfObj, 1)
            }
        }
        
    }
}

export {project}