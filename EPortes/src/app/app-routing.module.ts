import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { TimetableComponent } from './pages/timetable/timetable.component';
import { MenuFutbolComponent } from './pages/menu-futbol/menu-futbol.component';

const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'timetable', component: TimetableComponent},
  {path: 'menufutbol', component: MenuFutbolComponent},
  {path: '**', pathMatch: 'full', redirectTo : 'login'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
