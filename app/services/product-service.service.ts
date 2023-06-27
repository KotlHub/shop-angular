import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/models/Product';
import { HttpClient } from '@angular/common/http';
import { Types } from 'mongoose';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}
  url: string = 'http://localhost:9120/getproduct'
  public getProducts()
  {
    return this.http.get<IProduct[]>(this.url)
  }

  public getProduct(_id: Types.ObjectId)
  {
    console.log(_id);
    return this.http.get<IProduct>(`${this.url}/${_id}`);
  }
}
