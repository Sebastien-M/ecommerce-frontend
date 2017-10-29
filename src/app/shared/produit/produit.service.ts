import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProduitService {

  protected urlAPI:string = "http://localhost:8000/produit/all";
  constructor(protected http:HttpClient) { }

  getAll() {
    return this.http.get(this.urlAPI);
  }
}
