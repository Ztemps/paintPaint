// Core
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { LandingComponent } from '../pages/landing/landing.component';

// Modules
import { RouterModule } from '../../node_modules/@angular/router';
import { appRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
