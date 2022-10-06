import { Component } from '@angular/core';
import { RatingButton } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RatingCard';
  constructor(public ratingButton: RatingButton){

  }
}
