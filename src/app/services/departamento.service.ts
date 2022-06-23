import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento.model';

const baseURL_lista = 'http://localhost:8090/rest';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http:HttpClient) { }

  listarDepartamento(): Observable<Departamento[]>{
    return this.http.get<Departamento[]>(baseURL_lista+"/departamento")
  }
  servicioRegistrarDepartamento(){}
}
