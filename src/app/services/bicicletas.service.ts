import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bicicleta } from '../model/bicicleta';


@Injectable({
  providedIn: 'root'
})
export class BicicletasService {
6
  url = 'http://localhost:5000/api/v1';

  constructor(private httpClient: HttpClient) { }



  getBicicletas() {
    return this
      .httpClient
      .get(`${this.url}/bicicletas`);
  }

  getBicicleta(id) {
    return this
      .httpClient
      .get(`${this.url}/bicicletas/${id}`);
  }

  /**
   * Actualiza un alumno específico
   * @param alumno 
   */
  updateBicicleta(bicicleta: Bicicleta) {
    this
      .httpClient
      .put(`${this.url}/bicicletas/update/${bicicleta._id}`, bicicleta)
      .subscribe(res => console.log('Envío a actualización exitoso'));
  }


  addBicicleta(marca, tipo, precio) {

    const newBike: Bicicleta = {
      _id: 0,
      marca: marca,
      tipo: tipo,
      precio: precio,
    }
    this.httpClient.post(`${this.url}/bicicletas/add`, newBike)
      .subscribe(res => console.log('Envío a grabación exitoso'));
  }

  deleteBicicleta(id) {
    return this
      .httpClient
      .delete(`${this.url}/bicicletas/delete/${id}`);
  }

}
