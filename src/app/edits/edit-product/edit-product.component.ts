import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Products } from 'src/app/model/products';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  editProduct : FormGroup;

  productToEdit : any ={_id: 0 , ProductName:'', ProductDescription:'', ProductPrice:'' } ;
  


  constructor(private route: ActivatedRoute, private router: Router, private productService : ProductosService, private fb: FormBuilder) 
  {this.createForm() }

  createForm() {
    this.editProduct = this.fb.group({
      ProductName : ['', Validators.required],
      ProductDescription : ['', Validators.required],
      ProductPrice : ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productService.getProduct(params['id']).subscribe(res => {
        this.productToEdit = res;
        console.log(this.productToEdit);
      });
    });
  }

  updateBook(ProductName , ProductDescription, ProductPrice) {
    this.route.params.subscribe(params => {
      const _productToUpdate:Products ={
        _id: this.productToEdit._id,
        ProductName: ProductName ,
        ProductDescription : ProductDescription ,
        ProductPrice : ProductPrice ,

      }
      this.productService.updateProduct(_productToUpdate);
      this.router.navigate(['/']);
    });
  }
}
