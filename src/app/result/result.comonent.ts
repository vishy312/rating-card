import { Component, Input, Output, EventEmitter } from '@angular/core';




@Component({
    selector: 'result-card',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})


export class ResultComponent {

    @Input() rating: any;

    @Output() rate = new EventEmitter;

    rateAgain(){
        this.rate.emit();
    }
}