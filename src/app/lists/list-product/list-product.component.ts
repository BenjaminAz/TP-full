import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { ProductosService } from 'src/app/services/productos.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  productos: Products[]
  constructor(private productService: ProductosService, private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.getProducts()
  }

  //== productos

  getProducts() {
    this.productService
      .getProducts()
      .subscribe((data: Products[]) => {
        this.productos = data;
      });
  }

  deleteProducts(id) {
    this.confirmationDialogService.confirm('sad', '¿Desea eliminar el producto?')
      .then((confirmed) => {
        if (confirmed) {
          this.productService.deleteProduct(id).subscribe(res => {
            this.productos.splice(id, 1);
            this.getProducts();
          });
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }



}
