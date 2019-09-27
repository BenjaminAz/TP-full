import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumnos } from '../model/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  url :'http://localhost:5000/api/v1';

  constructor(private httpClient: HttpClient) { }

  getAlumnos() {
    return this
      .httpClient
      .get(`${this.url}/alumnos`);
  }

  getAlumno(id) {
    return this
      .httpClient
      .get(`${this.url}/alumnos/${id}`);
  }


  updateAlumno(alumn: Alumnos) {
    this
      .httpClient
      .put(`${this.url}/alumnos/update/${alumn._id}`, alumn)
      .subscribe(res => console.log('Envío a actualización exitoso'));
  }


  addAlumno(name, lastName) {

    const newAlumno: Alumnos = {
      _id: 0,
      studentName: name ,
      studentLastName: lastName ,

    }
    this.httpClient.post(`${this.url}/alumnos/add`, newAlumno)
      .subscribe(res => console.log('Envío a grabación exitoso'));
  }

  deleteAlumno(id) {
    return this
      .httpClient
      .delete(`${this.url}/alumnos/delete/${id}`);
  }

  
}
