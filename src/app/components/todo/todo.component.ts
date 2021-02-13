import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

// Model
import { UserModel } from 'src/app/models/user.model';
import { TodoModel } from 'src/app/models/todo.model';

//Service
import { TodosService } from 'src/app/services/todos.service';
import { UsersService } from 'src/app/services/users.service';

export interface DialogData {
  userId: number;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  users: UserModel[];

  constructor(
    private usersService: UsersService,
    public dialog: MatDialog
  ) { }
  
  ngOnInit() {
    this.getUsers()
  }

  openTasks(id) {
    this.dialog.open(DialogTodo, {
      data: {userId: id}
    });
  }

  getUsers() {
    this.usersService.getUsers()
      .subscribe( users => {this.users = users;})
  }

}

///Esse componente pertence ao MODAL de cada foto
@Component({
  selector: 'dialog-todo',
  templateUrl: './dialog-todo.html',
  styleUrls: ['./todo.component.css']
})
export class DialogTodo {
  
  todos: TodoModel[];

  constructor(
    private todosService: TodosService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(){
    this.getTodoByUserId();
  }

  getTodoByUserId() {
    this.todosService.getTodoByUserId(this.data.userId)
      .subscribe(todos => {this.todos = todos})
  }

}