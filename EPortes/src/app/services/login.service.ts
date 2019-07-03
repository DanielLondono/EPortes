import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeacherModel } from '../Model/TeacherModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpLogin: HttpClient) { }

  Url = 'http://localhost:8080/EscuelaDeportesJDM/rest/entrenadores';

  getEntrenador():Observable <any> {
    return this.httpLogin.get<any>(this.Url);
  }
}
