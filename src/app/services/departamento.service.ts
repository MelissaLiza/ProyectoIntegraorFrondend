import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento.model';




@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private apiServerUrl = 'http://localhost:8090/rest/departamento';
  constructor(private http:HttpClient) { }

  listarDepartamento(): Observable<Departamento[]>{
    return this.http.get<Departamento[]>(`${this.apiServerUrl}`);
  }

  public addDepartamentos(departamento: Departamento): Observable<Departamento> {
    
    return this.http.post<Departamento>(`${this.apiServerUrl}`, departamento);
  }

  public updateDepartamentos(departamento: Departamento): Observable<Departamento> {
    return this.http.put<Departamento>(`${this.apiServerUrl}`, departamento);
  }

  public deleteDepartamentos(iddepartamento: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/${iddepartamento}`);
  }
}
