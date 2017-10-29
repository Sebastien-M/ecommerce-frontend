import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
import { ProduitComponent } from './produit/produit/produit.component';
import { ProduitService } from './shared/produit/produit.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    // AlertModule.forRoot()
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
