import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/model/products';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  product : Products = {
    _id: 0,
    ProductName: '---',
    ProductDescription: '---',
    ProductPrice: 0 
  }

  constructor(private route: ActivatedRoute,private productService: ProductosService ) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      let _bookId:number = params['id'];
      this.loadAlumnoInfo(_bookId);
    });
  }


  loadAlumnoInfo(bookId:number){
    this.productService.getProduct(bookId).subscribe((data: Products) => {
      this.product = data;
    });
  }

}
