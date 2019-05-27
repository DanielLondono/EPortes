import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {path:'auth',component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'**',pathMatch:'full', redirectTo :'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
