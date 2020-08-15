import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { HttpClientModule } from '@angular/common/http';
import { GoogleLoginProvider, AuthServiceConfig } from "angularx-social-login";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("886013790757-itil2ab63uhk74futvfvk05mvoga6f1v.apps.googleusercontent.com")
  }
]);
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [CoreComponent, LoginComponent, ErrorPageComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig,
  }]
})
export class CoreModule { }
