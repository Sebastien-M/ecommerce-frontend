import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    // AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
