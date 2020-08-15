import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from '../core/core.component';
import { LoginComponent } from '../core/login/login.component';


const routes: Routes = [
  { path: '', component: CoreComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
