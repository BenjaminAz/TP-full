import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Alumnos } from 'src/app/model/alumnos';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-list-alumno',
  templateUrl: './list-alumno.component.html',
  styleUrls: ['./list-alumno.component.css']
})
export class ListAlumnoComponent implements OnInit {

  alumnos : Alumnos[];

  constructor(private alumnosService: AlumnosService , private confirmationDialogService : ConfirmationDialogService) { }

  ngOnInit() {
    this.getAlumnos()
  }


  

  //== Alumnos

  getAlumnos() {
    this.alumnosService
      .getAlumnos()
      .subscribe((data: Alumnos[]) => {
        this.alumnos = data;
      });

  }

  deleteAlumnos(id) {
    this.confirmationDialogService.confirm('sad', '¿Desea eliminar el producto?')
      .then((confirmed) => {
        if (confirmed) {
          this.alumnosService.deleteAlumno(id).subscribe(res => {
            this.alumnos.splice(id, 1);
            this.getAlumnos();
          });
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
}
