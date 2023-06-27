import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProduct } from 'src/app/models/Product';
import {ProductServiceService} from 'src/app/services/product-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!: IProduct[];
  productSubscription!: Subscription;

  constructor(private ProductService: ProductServiceService) {}
  ngOnInit(): void {
    this.productSubscription = this.ProductService.getProducts().subscribe((data) =>{
      this.products = data;
      console.log(this.products)
    })
  }

}
