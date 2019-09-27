import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-alumno',
  templateUrl: './new-alumno.component.html',
  styleUrls: ['./new-alumno.component.css']
})
export class NewAlumnoComponent implements OnInit {

  newAlumno: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private alumnosService: AlumnosService) { }

  createForm() {
    this.newAlumno = this.fb.group({
      studentName: ['', Validators.required],
      studentLastName: ['', Validators.required]
    });
  }

  addAlumno(studentName, studentLastName) {

    this.route.params.subscribe(params => {
      this.alumnosService.addAlumno(studentName, studentLastName);
      this.router.navigate(['']);
    });
  }
  ngOnInit() {
  }

}
