import { Component, OnInit } from '@angular/core';
import { Propietario } from 'src/app/models/propietario.model';
import { PropietarioService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-registra-propietario',
  templateUrl: './registra-propietario.component.html',
  styleUrls: ['./registra-propietario.component.css']
})
export class RegistraPropietarioComponent implements OnInit {

  propietario: Propietario [] = [];
  filtro: string = "";
  /*======= VARIABLE GLOVAR PARA EL FORMULARIO =======*/
  propietarioObj:Propietario = {
    id_propietario:0,
    nombre_propietario:"",
    apellido_propietario:"",
    dni_propietario:"",
    edad_propietario:""
  };

  constructor(private propietarioService:PropietarioService) {
    this.propietarioService.servicioListaPropietarioPorNombreDni(this.filtro==""?"todos":this.filtro).subscribe(
      (x)=> this.propietario = x
    )
  }


  /*======= METODO PARA REGISTRAR PROPIETARIO =======*/
  registrarProveedor(){
    this.propietarioService.servicioRegistrarPropietario(this.propietarioObj).subscribe(
      (x)=>{
        alert( x.mensaje)
        this.propietarioService.servicioListaPropietarioPorNombreDni(this.filtro==""?"todos":this.filtro).subscribe(
          (x)=> this.propietario = x
        )
      }
    );
    console.log(this.propietarioObj);
    this.propietarioObj = {
      id_propietario:0,
      nombre_propietario:"",
      apellido_propietario:"",
      dni_propietario:"",
      edad_propietario:""
    };
  }

  /*======= METODO PARA LLENAR FORMULARIO DE ACTUALIAR =======*/
  buscar(pro:Propietario){
    this.propietarioObj = pro;
  }

  /*======= METODO PARA ACTUALIZAR PROPIETARIO =======*/
  actualizaPropietario(){
    this.propietarioService.servicioActualizarPropietario(this.propietarioObj).subscribe(
          (x) => {
            document.getElementById("btn_act_cerrar")?.click();
            alert(x.mensaje);
            this.propietarioService.servicioListaPropietarioPorNombreDni(this.filtro==""?"todos":this.filtro).subscribe(
                    (x) => this.propietario = x
            );
          }
    );
    this.propietarioObj = {
      id_propietario:0,
      nombre_propietario:"",
      apellido_propietario:"",
      dni_propietario:"",
      edad_propietario:""
    };
  }

  /*======= METODO LISTAR PROPIETARIO POR NOMBRE DNI =======*/
  listaPropietarioPorNombreDni(){
    this.propietarioService.servicioListaPropietarioPorNombreDni(this.filtro==""?"todos":this.filtro).subscribe(
      (x)=> this.propietario = x
    )
  }

  /*======= METODO PARA ELIMINAR PROPIETARIO POR ID =======*/
  eliminarPropietario(pro:Propietario){
    this.propietarioService.servicioEliminarPropietario(pro.id_propietario).subscribe(
      (x)=>{
        alert(x.mensaje);
        this.propietarioService.servicioListaPropietarioPorNombreDni(this.filtro==""?"todos":this.filtro).subscribe(
          (x)=> this.propietario = x
        );
      }
    )
  }

  /*======= METODO PARA LIMPIAR FORMULARIO =======*/
  limpiar(){
    this.propietarioObj = {
      id_propietario:0,
      nombre_propietario:"",
      apellido_propietario:"",
      dni_propietario:"",
      edad_propietario:""
    };
  }
  ngOnInit(): void {
  }

}
