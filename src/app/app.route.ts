import {  Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { ProduitComponent } from "./produit/produit/produit.component";

export const appRoutes:Routes = [
    {path:"produits",component:ProduitComponent},
    {path: "",component:MainComponent},
    {path: '', pathMatch:'full', redirectTo:'/'},
];