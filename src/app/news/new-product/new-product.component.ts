import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  newProduct : FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private productService: ProductosService) { }
  createForm() {
    this.newProduct = this.fb.group({
      ProductName: ['', Validators.required],
      ProductDescription: ['', Validators.required],
      ProductPrice: ['', Validators.required]
    });
  }

  addProduct( ProductName, ProductDescription, ProductPrice) {

    this.route.params.subscribe(params => {
      this.productService.addProduct( ProductName, ProductDescription, ProductPrice );
      this.router.navigate(['']);
    });
  }

  ngOnInit() {
  }

}
