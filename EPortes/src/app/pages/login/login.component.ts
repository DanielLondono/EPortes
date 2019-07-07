import { Component, OnInit, DebugElement } from '@angular/core';
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
  succesful: Boolean;
  constructor(private httpLogin: LoginService, private router: Router) {
  }

  ngOnInit() {
  }
  IncioSesion() {
    this.httpLogin.getEntrenador()
      .subscribe(responseData => {
        ;
        this.teacher = responseData;
        this.succesful = LoginAcces(this.data, this.teacher);
        if (this.succesful == true) {
          this.router.navigate(['home']);
        }

      }
      );
  }
}

function LoginAcces(data: Login, response: TeacherModel[]): Boolean {

  /*console.log('Los datos son : ');
  console.log(data.username);
  console.log(response[0].correoEnt);
  */
  // tslint:disable-next-line: forin
  for (let p in response) {
    // tslint:disable-next-line: triple-equals

    if (response[p].contraseñaEnt == data.password) {
      return true;
    } else {
      console.log('Error de autenticacion');

    }
  }

}
