import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-futbol',
  templateUrl: './menu-futbol.component.html',
  styleUrls: ['./menu-futbol.component.css']
})
export class MenuFutbolComponent implements OnInit {

  constructor(private router: Router) { }

 
  ngOnInit() {
  }


  ListaEstudiantes() {
    this.router.navigate(['listaestudiantes']);
  }
}
