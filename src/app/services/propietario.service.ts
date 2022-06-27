import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Propietario } from '../models/propietario.model';

const baseURL = "http://localhost:8090/rest/propietario"
@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  constructor(private http:HttpClient) { }

  /*======= SERVICIO LISTAR PROPIETARIO =======*/
  listaPropietario(): Observable<Propietario[]>{
    return this.http.get<Propietario[]>(baseURL)
  }

  /*======= SERVICIO REGISTRAR PROPIETARIO =======*/
  servicioRegistrarPropietario(pro:Propietario):Observable<any>{
    return this.http.post(baseURL,pro)
  }

  /*======= SERVICIO PARA LISTAR PROPIETARIO POR NOMBRE Y DNI =======*/
  servicioListaPropietarioPorNombreDni(filtro:any):Observable<Propietario[]>{
    return this.http.get<Propietario[]>(baseURL + "/listaPropietarioPorNombreDni/"+ filtro)
  }

  /*======= SERVICIO PARA ELIMINAR PROPIETARIO POR ID =======*/
  servicioEliminarPropietario(id:any):Observable<any>{
    return this.http.delete(baseURL + "/eliminaPropietario/" + id);
  }

  /*======= SERVICIO PARA ACTUALIZAR PROPIETARIO =======*/
  servicioActualizarPropietario(pro:Propietario):Observable<any>{
    return this.http.put(baseURL + "/actualizaPropietario", pro);
  }



}
