import { LightningElement, track } from 'lwc';

export default class ToDoList extends LightningElement {
    @track todoList=[];
    newTask='';
    handleTodoListChange(event){
        this.newTask = event.target.value;
    }

    addTodoList(){

        if(this.newTask == ''){
            alert('Please enter a To-Do-List');
            return;    
        }

        let taskId = this.todoList.length + 1;
        let newTaskObject   = {
            id : taskId,
            task : this.newTask

        }
        this.todoList = [...this.todoList, newTaskObject];
        console.log(JSON.stringify(this.todoList, null, 2));
        this.newTask = '';
    }

    get sizeOfTodoList(){
        return this.todoList.length > 0;
    }

    deleteTask(event){
        let taskId = event.target.name;
        this.todoList = this.todoList.filter(eachTask => eachTask.id != taskId);
    }

}