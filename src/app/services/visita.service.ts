import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visitante } from '../models/visitante.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RegistroVisita } from '../models/registro-visita.model';

const baseURL_lista = 'http://localhost:8090/rest';




@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  constructor(private http:HttpClient) { }

  listaVisitante(): Observable<Visitante[]>{
    return this.http.get<Visitante[]>(baseURL_lista+"/visitante")
  }


  listaVisita(): Observable<RegistroVisita[]>{
    return this.http.get<RegistroVisita[]>(baseURL_lista+"/registroVisita")
  }

  RegistraVisitante(data: Visitante): Observable<any> {
    return this.http.post(baseURL_lista+ "/visitante", data);
  }
  RegistraVisita(data: RegistroVisita): Observable<any> {

    return this.http.post(baseURL_lista+ "/registroVisita", data);
  }

}
