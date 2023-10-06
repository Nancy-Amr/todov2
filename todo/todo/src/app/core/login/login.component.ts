import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  users: any;
  username:any;
  name:any;
  avatar:any;
  currentUsername: any = null;
  userAutherization: any = null;
  LoginForm!: FormGroup;
  
  constructor(private router: Router, private http: HttpClient,private route : ActivatedRoute,private service: UserServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      debugger;
      this.currentUsername = paramMap.get('username');
      this.avatar=paramMap.get('avatar');
      this.name=paramMap.get('name');
      
    });

   this.fetchData();

    this.LoginForm = new FormGroup(
      {
        'username': new FormControl(''),
        'userpass': new FormControl('' , Validators.required),
      }
    )

  }

  

  signIn(username: string): void {
    this.currentUsername = username;
  }
  fetchData(): void {
    this.http.get('http://localhost:4000/users')
      .subscribe(response => {
        this.users = response;
      }, error => {
        console.error('Error fetching data:', error);
      });
  }

  
  sendPasswordAndLogIn(password: string): void {
    if (password == ''){
      alert ('you should enter password' ) ;
      
    }else{
     
  //  this.service.getJSON().subscribe((data:any) => {
   //   data.forEach((element:any)=> {  
        //alert('password---' + password) ;
       // alert(' element.password---' +  element.password) ;
         // if (password == element.password) {
            //this.validate2=true;
            //alert (element.id) ;
           // this.router.navigate(['/todo-list',{ id :element.id, name: element.name,avatar: element.avatar}])
           this.userAutherization = 'Basic ' + btoa(this.currentUsername + ':' + password);
           localStorage.setItem('userAutherization', this.userAutherization);
            this.router.navigate(['todo',{ username : this.currentUsername, avatar:this.avatar}]); 
         // }else{
         //   alert("wrong password");
         // }
        //  })    
      //  }) 
    };
   
  } 

  
}