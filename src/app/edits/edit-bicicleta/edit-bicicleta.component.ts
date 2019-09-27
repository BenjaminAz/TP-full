import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BicicletasService } from '../../services/bicicletas.service';
import { Bicicleta } from '../../model/bicicleta';


@Component({
  selector: 'app-edit-bicicleta',
  templateUrl: './edit-bicicleta.component.html',
  styleUrls: ['./edit-bicicleta.component.css']
})
export class EditBicicletaComponent implements OnInit {

  editBicicleta: FormGroup;
  bikeToEdit: any = { _id: 0, marca: '', tipo: '', precio:'' };

  constructor(private route: ActivatedRoute, private router: Router, private bikeService: BicicletasService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.editBicicleta = this.fb.group({
      marca: ['', Validators.required],
      tipo: ['', Validators.required],
      precio: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bikeService.getBicicleta(params['id']).subscribe(res => {
        this.bikeToEdit = res;
        console.log(this.bikeToEdit);
      });
    });
  }

  updateBicicleta(marca, tipo, precio) {
    this.route.params.subscribe(params => {
      const _bikeToUpdate:Bicicleta ={
        _id: this.bikeToEdit._id,
        marca: marca,
        tipo: tipo,
        precio: precio,
      }
      this.bikeService.updateBicicleta(_bikeToUpdate);
      this.router.navigate(['/']);
    });
  }

}
