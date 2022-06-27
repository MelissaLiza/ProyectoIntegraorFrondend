import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Incidente } from 'src/app/models/incidente.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { IncidenteService } from 'src/app/services/incidente.service';

@Component({
  selector: 'app-registra-incidente',
  templateUrl: './registra-incidente.component.html',
  styleUrls: ['./registra-incidente.component.css']
})
export class RegistraIncidenteComponent implements OnInit {
  departamento: Departamento[] =[];
  incidente: Incidente [] = [];
  filtro: string = "";
  /*======= VARIABLE GLOVAR PARA EL FORMULARIO =======*/
  incidenteObj:Incidente ={
    id_incidente:0,
    causa_incidente:"",
    detalle_incidente:"",
    departamento:{
      id_departamento: -1
    }
  }


  constructor(private incidenteService:IncidenteService, private departamentoService:DepartamentoService) {
    this.departamentoService.listarDepartamento().subscribe(
      (d) => this.departamento = d
    )
  }

  /*======= METODO PARA REGISTRAR PROPIETARIO =======*/
  registrarIncidente(){
    this.incidenteService.servicioRegistrarIncidente(this.incidenteObj).subscribe(
      (x)=>{ alert(x.mensaje)
        this.incidenteService.servicioListaIncidenteConFiltro(this.filtro==""?"todos":this.filtro).subscribe(
          (x)=> this.incidente = x
        )}
    );
    this.incidenteObj={
    id_incidente:0,
    causa_incidente:"",
    detalle_incidente:"",
    departamento:{
      id_departamento: -1
    }
    }
  }
  limpiar(){
    this.incidenteObj={
      id_incidente:0,
      causa_incidente:"",
      detalle_incidente:"",
      departamento:{
        id_departamento: -1
      }
      }
  }

  /*======= METODO LISTAR PROPIETARIO POR NOMBRE DNI =======*/
  listaIncidenteConFiltro(){
    this.incidenteService.servicioListaIncidenteConFiltro(this.filtro==""?"todos":this.filtro).subscribe(
      (x)=> this.incidente = x
    )
  }
  listaIncidenteConFiltro2(){
    this.incidenteService.servicioListaIncidenteConFiltro2(this.filtro==""?"todos":this.filtro).subscribe(
      (x)=> this.incidente = x
    )
  }

  /*======= METODO SOLUCIONAR INCIDENTE  =======*/
  solucionarIncidente(){
    this.incidenteService.servicioSolucionarIncidente(this.incidenteObj).subscribe(
          (x) => {
            alert(x.mensaje);
            this.incidenteService.servicioListaIncidenteConFiltro(this.filtro==""?"todos":this.filtro).subscribe(
              (x)=> this.incidente = x
            )
          }
    );
  }

  /*======= METODO PARA LLENAR FORMULARIO DE INCIDNETE =======*/
  buscar(inc:Incidente){
    this.incidenteObj = inc;


  }

  ngOnInit(): void {
  }

}
