import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router:Router,
    private authService:AuthService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  logoutUser(){

    this.authService.logout();
    this.flashMessage.show("You're logged out", {cssClass: 'alert-success', timeout: 3000});
    this.router.navigate(['/login']);
    return false;
  }
  loggedIn(){
    const token = localStorage.getItem("tokenid");
    if(token){
      return true;
    }else{
      return false;
    }
  }

  loadLoginedUser(){
    return JSON.parse(localStorage.getItem('user'));
  }
  adminLogin(){
    const user = this.loadLoginedUser();
    if(user==null){
      return false;
    } else {
      const userpost = user.post;
      if(userpost=="admin"){
        return true;
      } else {
        return false;
      }
      
    }
  }

  


}
