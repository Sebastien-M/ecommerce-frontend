import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../shared/produit/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: Object;
  constructor(protected produit: ProduitService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    let produits = this.produit.getAll();
    produits.subscribe((prod) => {
      this.produits = prod;
    });
  }
}
