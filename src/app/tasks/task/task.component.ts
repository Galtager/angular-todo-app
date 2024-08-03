import { Component, inject, Input } from '@angular/core';
import { Task } from './task.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";
import { TaskService } from '../tasks.service';




@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({ required: true }) task!: Task

  private taskService = inject(TaskService)

  onComplete() {
    this.taskService.removeTask(this.task.id)
  }
}
