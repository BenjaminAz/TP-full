import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { BicicletasService } from '../../services/bicicletas.service';

@Component({
  selector: 'app-add-bicicleta',
  templateUrl: './add-bicicleta.component.html',
  styleUrls: ['./add-bicicleta.component.css']
})
export class NewBikeComponent implements OnInit {

  newBike: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private bikeService: BicicletasService) {
    this.createForm();
  }

  createForm() {
    this.newBike = this.fb.group({
      marca: ['', Validators.required],
      tipo: ['', Validators.required],
      precio: ['', Validators.required]
    });
  }

  addBicicleta(marca, tipo, precio) {

    this.route.params.subscribe(params => {
      this.bikeService.addBicicleta(marca, tipo, precio);
      this.router.navigate(['']);
    });
  }

  ngOnInit() {
  }

}
