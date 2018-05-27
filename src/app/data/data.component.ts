import { Component,  OnInit, Input } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  data_list: Data[];
  @Input('parentData') incomingData: string;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    //this.getData();
  }

  getData(): void {
    this.dataService.getData().subscribe(data => {
      this.data_list = data;
      console.log(data);
    });
  }

}
