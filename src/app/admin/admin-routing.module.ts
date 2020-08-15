import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from '../admin/admin.component'
import { DashBoardComponent } from './dash-board/dash-board.component';
const routes: Routes = [{ path: '', component: AdminComponent },
{path:'dashboard',component:DashBoardComponent}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
