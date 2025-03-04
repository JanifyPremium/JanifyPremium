import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [
    'assets/cosplay1.jpg',
    'assets/cosplay2.jpg',
    'assets/cosplay3.jpg'
  ];
}
