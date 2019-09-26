import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BicicletasService } from '../services/bicicletas.service';
import { Bicicleta } from '../model/bicicleta';

@Component({
  selector: 'app-view-bicicleta',
  templateUrl: './view-bicicleta.component.html',
  styleUrls: ['./view-bicicleta.component.css']
})
export class ViewBicicletaComponent implements OnInit {
  bicicleta: Bicicleta = {
    _id:0,
    marca:'INFORMACION NO DISPONIBLE',
    tipo:'INFORMACION NO DISPONIBLE',
    precio:0
  };

  constructor(private route: ActivatedRoute, private bicicletasService: BicicletasService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let _bicicletaId:number = params['id'];
      this.loadAlumnoInfo(_bicicletaId);
    });
  }


  loadAlumnoInfo(bicicletaId:number){
    this.bicicletasService.getBicicleta(bicicletaId).subscribe((data: Bicicleta) => {
      this.bicicleta = data;
    });
  }

}
