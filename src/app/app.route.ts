import {  Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";

export const appRoutes:Routes = [
    {path: "",component:MainComponent},
    {path: '', pathMatch:'full', redirectTo:'/'},
];