import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Alumnos } from 'src/app/model/alumnos';

@Component({
  selector: 'app-view-alumno',
  templateUrl: './view-alumno.component.html',
  styleUrls: ['./view-alumno.component.css']
})
export class ViewAlumnoComponent implements OnInit {

  alumno: Alumnos = {
    _id :0 ,
    studentName:'--',
    studentLastName:'--'
  }

  constructor(private route : ActivatedRoute, private alumnoService : AlumnosService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let _alumnoId:number = params['id'];
      this.loadAlumnoInfo(_alumnoId);
    });
  }


  loadAlumnoInfo(alumnoId:number){
    this.alumnoService.getAlumno(alumnoId).subscribe((data: Alumnos) => {
      this.alumno = data;
    });
  }

}
