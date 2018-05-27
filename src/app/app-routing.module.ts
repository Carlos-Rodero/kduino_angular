import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent }      from './data/data.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { FilesComponent }   from './files/files.component';
import { DataDetailComponent }  from './data-detail/data-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: DataDetailComponent },
  { path: 'data', component: DataComponent },
  { path: 'files', component: FilesComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],

})
export class AppRoutingModule { }
