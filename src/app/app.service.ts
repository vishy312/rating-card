import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class RatingButton{
    result = 0;
    notRated: boolean = true;

    selectRating(value: number, event: any){
        this.result = value;
        event.target.style.backgroundColor = "hsl(217, 12%, 63%)";
        event.target.style.color = "black";
    }

    submitButton(event: any){
        this.notRated = false;
    }

    rateAgainFunc(){
        this.notRated = true;
    }
}