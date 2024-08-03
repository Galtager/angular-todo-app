import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../Const';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, UserComponent, TasksComponent]
})
export class AppComponent {

  users = DUMMY_USERS
  selectedUser: User | undefined = undefined;

  onSelectUser(user: User) {
    this.selectedUser = user;
  }

  trackUser(index: number, user: User) {
    return user.id;
  }
}
