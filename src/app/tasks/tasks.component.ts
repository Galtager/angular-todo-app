import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { User } from '../user/user.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  constructor(private tasksService: TaskService) { }

  @Input({ required: true }) user!: User;
  isAddingTask = false;


  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user.id)
  }
  trackTask(index: number, task: Task) {
    return task.id;
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
