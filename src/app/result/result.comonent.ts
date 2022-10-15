import { Component, Input, Output } from '@angular/core';



@Component({
    selector: 'result-card',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})


export class ResultComponent {
    @Input() rating: any;


}