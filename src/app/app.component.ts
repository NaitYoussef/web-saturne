import { Component, Inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import {Response} from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UpperCasePipe]
})
export class AppComponent {

  constructor() {
  }

}
