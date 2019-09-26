import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { Bicicleta } from '../model/bicicleta';
import { BicicletasService } from '../services/bicicletas.service';

@Component({
  selector: 'app-list-bicicletas',
  templateUrl: './list-bicicletas.component.html',
  styleUrls: ['./list-bicicletas.component.css']
})
export class ListBicicletasComponent implements OnInit {

  bicicletas: Bicicleta[];

  constructor(private bikeService: BicicletasService, private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.getBicicletas();
  }


  getBicicletas() {
    this.bikeService
      .getBicicletas()
      .subscribe((data: Bicicleta[]) => {
        this.bicicletas = data;
      });
      console.log(this.bicicletas)
  }


  deleteBicicleta(id) {
    this.confirmationDialogService.confirm('Please confirmar..', '¿Desea eliminar la bicicleta?')
      .then((confirmed) => {
        if (confirmed) {
          this.bikeService.deleteBicicleta(id).subscribe(res => {
            this.bicicletas.splice(id, 1);
            this.getBicicletas();
          });
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
}
