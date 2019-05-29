import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  

  constructor(config: NgbCarouselConfig) {
    config.interval=5000;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.pauseOnHover=false;
  }


  ngOnInit() {
  }

}
