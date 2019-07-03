import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { TeacherModel } from 'src/app/Model/TeacherModel';
import { Observable } from 'rxjs';
import { Login } from 'src/app/Model/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data = new Login('', '');
  teacher: TeacherModel[];
  constructor( private httpLogin: LoginService, private router: Router) { }

  ngOnInit() {
  }
  IncioSesion() {
    this.httpLogin.getEntrenador()
    .subscribe(responseData => {
        console.log(responseData);
        this.teacher = responseData;
        this.router.navigate(['home']);
        console.log (this.data)
      }
    );
  }
}
