import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hal-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  installSchema = 'ng add @hafslundnett/hal-components';

  constructor() { }

  ngOnInit() {
  }

}
