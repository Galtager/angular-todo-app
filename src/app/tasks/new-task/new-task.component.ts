import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TaskService } from '../tasks.service';

const InitialNewTask = { title: "", summary: "", dueDate: new Date };

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({ required: true }) userId?: string;
  @Output() cancelNewTask = new EventEmitter()

  newTask: NewTaskData = { ...InitialNewTask };
  private taskService = inject(TaskService)

  onAddTask(e: SubmitEvent) {
    this.taskService.addTask(this.newTask, this.userId!)
    this.onCancel();
  }
  onCancel() {
    this.newTask = { ...InitialNewTask };
    this.cancelNewTask.emit()
  }
}
