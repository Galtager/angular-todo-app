import { Injectable } from "@angular/core";
import { NewTaskData, Task } from "./task/task.model";

@Injectable({ providedIn: "root" })
export class TaskService {
    private tasks: Task[] = [];

    constructor() {
        this.loadTasks()
    }

    getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId)
    }
    addTask(taskData: NewTaskData, userId: string) {
        const id = "t" + (this.tasks.length + 1);
        this.tasks.push({
            ...taskData,
            userId,
            id
        });
        this.saveTasks();
    }
    removeTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
    }
    private saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks))
    }
    private loadTasks() {
        const tasksString = localStorage.getItem("tasks");
        if (tasksString) {
            this.tasks = JSON.parse(tasksString);
        }
    }

}

