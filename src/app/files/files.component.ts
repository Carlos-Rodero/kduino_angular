import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  download_APK_android() {
    this.router.navigate(["http://www.google.es"]);
  }

}
