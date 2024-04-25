import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginSuccess: boolean = false;

  constructor(private loginService: LoginService) { }

  login() {
    this.loginService.login(this.username, this.password)
      .subscribe(
        () => {
          this.loginSuccess = true;
          setTimeout(() => {
            this.loginSuccess = false;
          }, 3000); // Hide success message after 3 seconds
        },
        (  error: any) => console.error(error)
      );
  }
}
