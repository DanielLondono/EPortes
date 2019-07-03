import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TimetableComponent } from './pages/timetable/timetable.component';
import { MenuFutbolComponent } from './pages/menu-futbol/menu-futbol.component';
import { ListStudentComponent } from './pages/list-student/list-student.component';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    TimetableComponent,
    MenuFutbolComponent,
    ListStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
