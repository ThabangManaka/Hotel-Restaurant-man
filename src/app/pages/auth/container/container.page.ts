import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.page.html',
  styleUrls: ['./container.page.scss'],
})
export class ContainerPage implements OnInit {
  login = {
    email: "",
    password: "",
  };
  type: boolean = true;
  constructor(private router : Router) { }

  ngOnInit() {
  }
  changeType() {
    this.type = !this.type;
  }
  goToHome() {
    console.log(this.login);
    this.router.navigate(['/preferences']);
  }

  goToForget() {
 
    this.router.navigate(['/forget-password']);
  }

  facebookLogin() {
    console.log("Facebook");
    this.router.navigate(['setting']);
  }

  twitterLogin() {
    console.log("Twitter");
    this.router.navigate(['setting']);
  }

  gmailLogin() {
    console.log("Gmail");
    this.router.navigate(['setting']);
  }

  touchLogin() {
    console.log("Touch Login");
    this.router.navigate(['/touch-id']);
  }

  faceLogin() {
    console.log("Face Login");
    this.router.navigate(['/face-id']);
  }

  goToRegister() {
    this.router.navigate(['register']);
  }
}
