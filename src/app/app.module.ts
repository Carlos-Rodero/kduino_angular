import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';


import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { DataDetailComponent } from './data-detail/data-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataSearchComponent } from './data-search/data-search.component';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    DataDetailComponent,
    DashboardComponent,
    DataSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
