import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


export interface Table_Users{
  id: number,
  name: string,
  avatar: string,
  username: string,
  password:string,
}



@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  displayedColumns: string[] = ['id', 'name', 'username','avatar'];
  users: Table_Users[] = [];
  dataSource = this.users;
  clickedRows = new Set<Table_Users>();
  hide = true;
  
  currentUsername: any = null;
  userAutherization: any = null;
  LoginForm!: FormGroup;
  
  constructor(private userservice:UserServiceService, private router : Router, private http: HttpClient){   
   
    this.userservice.getJsonData().subscribe((res: any)=>{
    this.users = res;
    }); 
  }
  formnext( username: String, avatar:String, name:String){
    this.router.navigate(['/login',{ username :username,name:name, avatar:avatar}])
  }


 
}



