import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../data';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
    @Input() data: Array<Data>;

    constructor() { 
    }

    ngOnInit() {
    }

}
