import { HttpClient,HttpParams  } from '@angular/common/http';
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

consultaBoleta(fecha_pago_boleta:string, id_departamento:number, ultimo_Dia_Pago:string,estado_boleta:number,id_servicio:number): Observable<any> {

  const params = new HttpParams()
    .set("fecha_pago_boleta", fecha_pago_boleta)
    .set("id_departamento", id_departamento)
    .set("ultimo_Dia_Pago", ultimo_Dia_Pago)
    .set("estado_boleta", estado_boleta)
    .set("id_servicio", id_servicio);

  return this.http.get(baseURL_lista+"/boleta/listaBoletaPorfecha", {params});

}

}
