import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicio } from '../models/servicio.model';

const baseURL_lista = 'http://localhost:8090/rest';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }


  listaServicios(): Observable<Servicio[]>{
    return this.http.get<Servicio[]>(baseURL_lista+"/servicio")
  }


}
