import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataService }  from '../data.service';
import { Data } from '../data';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.css']
})
export class DataDetailComponent implements OnInit {

  @Input() data: Data;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getDataUnique();
  }
  
  getDataUnique(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getDataUnique(id)
      .subscribe(data => this.data = data);
  }

  goBack(): void {
    this.location.back();
  }
}
