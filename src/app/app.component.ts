import { Component } from '@angular/core';
import { RatingButton } from './app.service';
import { ResultComponent } from './result/result.comonent';

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
