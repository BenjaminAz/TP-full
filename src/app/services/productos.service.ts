import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url : 'http://localhost:5000/api/v1'

  constructor(private httpClient : HttpClient) { }

  getProducts() {
    return this
      .httpClient
      .get(`${this.url}/products`);
  }

  getProduct(id) {
    return this
      .httpClient
      .get(`${this.url}/products/${id}`);
  }

  updateProduct(product: Products) {
    this
      .httpClient
      .put(`${this.url}/products/update/${product._id}`, product)
      .subscribe(res => console.log('Envío a actualización exitoso'));
  }


  addProduct(name, description, price) {

    const newProduct: Products = {
      _id: 0,
      ProductName: name ,
      ProductDescription: description ,
      ProductPrice: price
    }
    this.httpClient.post(`${this.url}/products/add`, newProduct)
      .subscribe(res => console.log('Envío a grabación exitoso'));
  }

  deleteProduct(id) {
    return this
      .httpClient
      .delete(`${this.url}/products/delete/${id}`);
  }

}
