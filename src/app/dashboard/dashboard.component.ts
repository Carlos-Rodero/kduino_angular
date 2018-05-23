import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data_list: Data[] = [];
  



  constructor(private dataService: DataService) { 
      
  }

  ngOnInit() {
    //this.getData();
    this.getMap();
  }
/*
  getData(): void {
    this.dataService.getData()
      .subscribe(data => this.data_list = data.slice(1, 5));
  }*/

  getMap() {
    //var mymap = L.map('mapid').setView([51.505, -0.09], 13);
  }

}
