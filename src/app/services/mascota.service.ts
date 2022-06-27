import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mascota } from '../models/mascota.model';

const baseURL = "http://localhost:8090/rest/mascota"
@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http:HttpClient) { }

  /*======= SERVICIO REGISTRAR MASCOTA =======*/
  servicioRegistrarMascota(inc:Mascota):Observable<any>{
    return this.http.post(baseURL+"/registrarMascota",inc)
  }

  /*======= SERVICIO PARA LISTAR MASCOTA CON FILTRO =======*/
  servicioListaMascotaConFiltro(filtro:any):Observable<Mascota[]>{
    return this.http.get<Mascota[]>(baseURL + "/listaMascotaConFiltro/"+ filtro)
  }
}
