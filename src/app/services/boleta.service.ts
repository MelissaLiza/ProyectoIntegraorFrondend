import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boleta } from '../models/boleta.model';


const baseURL_lista = 'http://localhost:8090/rest';

@Injectable({
  providedIn: 'root'
})
export class BoletaService {

  constructor(private http:HttpClient) { }


  listaBoletas(): Observable<Boleta[]>{
    return this.http.get<Boleta[]>(baseURL_lista+"/boleta")
  }

  RegistraBoleta(data: Boleta): Observable<any> {
    return this.http.post(baseURL_lista+ "/boleta", data);
  }
  actualiza(aux:Boleta):Observable<any>{
    return this.http.put<any>(baseURL_lista+"/boleta/actualizaBoleta",aux);
}

}
