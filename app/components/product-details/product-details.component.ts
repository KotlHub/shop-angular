import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
constructor(private route: ActivatedRoute){}
  
product!: IProduct;
productSubscribtion!: Subscription;

ngOnInit(): void {
  this.productSubscribtion = this.route.data.subscribe((data) => {
    this.product = data['data'];
    console.log(data)
  })
  }

}
