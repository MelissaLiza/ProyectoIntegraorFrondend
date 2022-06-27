import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Incidente } from '../models/incidente.model';


const baseURL = "http://localhost:8090/rest/incidente"
@Injectable({
  providedIn: 'root'
})
export class IncidenteService {

  constructor(private http:HttpClient) { }

  /*======= SERVICIO REGISTRAR INCIDENTE =======*/
  servicioRegistrarIncidente(inc:Incidente):Observable<any>{
    return this.http.post(baseURL+"/registrarIncidente",inc)
  }

  /*======= SERVICIO PARA LISTAR INCIDENTE CON FILTRO =======*/
  servicioListaIncidenteConFiltro(filtro:any):Observable<Incidente[]>{
    return this.http.get<Incidente[]>(baseURL + "/listaIncidenteConFiltro/"+ filtro)
  }
  /*======= SERVICIO PARA LISTAR INCIDENTE CON FILTRO =======*/
  servicioListaIncidenteConFiltro2(filtro:any):Observable<Incidente[]>{
    return this.http.get<Incidente[]>(baseURL + "/listaIncidenteConFiltro2/"+ filtro)
  }

  /*======= SERVICIO PARA ACTUALIZAR INCIDENTE =======*/
  servicioSolucionarIncidente(inc:Incidente):Observable<any>{
    return this.http.put(baseURL + "/solucionarIncidente", inc);
  }

}
