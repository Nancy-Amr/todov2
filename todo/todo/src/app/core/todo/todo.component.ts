import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  userTodos: any;
  avatar!: string;
  Name!: string;
  username!: string;
  users: any;
  status: boolean = false;
 
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
    this.fetchTodos();
  }

  logOut(): void {
    localStorage.removeItem('userAutherization');
    //this.router.navigate(['login']);
    this.router.navigate(['/login',{ username :  this.username, name: this.Name, avatar:this.avatar}])

  }

  fetchData(): void {
    this.http.get('http://localhost:4000/users')
      .subscribe(response => {
        this.users = response;
      }, error => {
        console.error('Error fetching data:', error);
      });
  }

  fetchTodos(): void {
   // alert('iam in fetch data') ;
    let storedValue = localStorage.getItem('userAutherization');
    if (storedValue) {
      const headers = new HttpHeaders({
        'Authorization': storedValue
      });

      this.http.get('http://localhost:4000/todos', { headers: headers })
        .subscribe((response: any) => {
          this.userTodos = response;
          for (let todo of this.userTodos) {
            for (let user of this.users) {
              if (todo.user_id == user.id) {
                this.avatar = user.avatar;
                this.Name = user.name;
                this.username= user.username;
              }
            }
          }
        }, error => {
          console.error('Error fetching data:', error);
          this.router.navigate(['login']);
        });
    } else {
      this.router.navigate(['login']);
    }

  }

  DeleteTask(id: any) {
    let storedValue = localStorage.getItem('userAutherization');
    if (storedValue) {
      const headers = new HttpHeaders({
        'Authorization': storedValue
      });
      this.http.delete(`http://localhost:4000/todos/${id}`, { headers: headers }).subscribe((Response: any) => 
      {
        if (!Response.success) {
            console.log(Response.message);
            this.fetchTodos();
        } else {
            console.log(Response.message);
            this.fetchTodos();
        }})
 
    }
  }
  AddTask(task: string) {
    let storedValue = localStorage.getItem('userAutherization');
    if (storedValue) {
      const headers = new HttpHeaders({
        'Authorization': storedValue
      });
      const body = { task: task }
      this.http.post('http://localhost:4000/todos', body, { headers: headers }).subscribe((Response: any) => 
      {
        if (!Response.success) {
            console.log(Response.message);
            this.fetchTodos();
        } else {
            console.log(Response.message);
            this.fetchTodos();
        }})
 
    }
  }
  ToggleTask(todoId: any) {
    let storedValue = localStorage.getItem('userAutherization');
    if (storedValue) {
      const headers = new HttpHeaders({
        'Authorization': storedValue
      });
      
      this.http.put(`http://localhost:4000/todos/${todoId}`, '', { headers: headers }).subscribe((Response: any) => 
      {
        if (!Response.success) {
            console.log(Response.message);
            this.fetchTodos();
        } else {
            console.log(Response.message);
            this.fetchTodos();
        }})
 
    }
  }
}