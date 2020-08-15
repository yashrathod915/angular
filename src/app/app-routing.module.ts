import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Role } from './role';
import { UserGaurdService } from './core/user-gaurd/user-gaurd.service'

const routes: Routes = [
  { path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  {
    canActivate: [UserGaurdService],
    data: { roles: [Role.Admin] },
    path: 'AdminModule', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    canActivate: [UserGaurdService],
    data: { roles: [Role.User] },
    path: 'air-line-staff', loadChildren: () => import('./air-line-staff/air-line-staff.module').then(m => m.AirLineStaffModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]

})
export class AppRoutingModule { }
