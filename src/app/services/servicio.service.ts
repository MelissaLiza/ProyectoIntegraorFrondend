import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicio } from '../models/servicio.model';

const baseURL_lista = 'http://localhost:8090/rest';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private apiServerUrl = 'http://localhost:8090/rest/servicio';
  constructor(private http:HttpClient) { }


  listaServicios(): Observable<Servicio[]>{
    return this.http.get<Servicio[]>(`${this.apiServerUrl}`)
  }

  public addServicio(servicio: Servicio): Observable<Servicio> {
    
    return this.http.post<Servicio>(`${this.apiServerUrl}`, servicio);
  }

  public updateServicio(servicio: Servicio): Observable<Servicio> {
    return this.http.put<Servicio>(`${this.apiServerUrl}`, servicio);
  }

  public deleteServicio(idservicio: number): Observable<void> {
    return this.http.delete<void>( `${this.apiServerUrl}/${idservicio}`);
  }


}
