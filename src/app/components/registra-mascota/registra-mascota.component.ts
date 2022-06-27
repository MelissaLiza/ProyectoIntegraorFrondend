import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota.model';
import { Propietario } from 'src/app/models/propietario.model';
import { MascotaService } from 'src/app/services/mascota.service';
import { PropietarioService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-registra-mascota',
  templateUrl: './registra-mascota.component.html',
  styleUrls: ['./registra-mascota.component.css']
})
export class RegistraMascotaComponent implements OnInit {
  propietario: Propietario[] =[];
  mascota: Mascota [] = [];
  filtro: string = "";

  /*======= VARIABLE GLOBAL PARA EL FORMULARIO =======*/
  mascotaObj:Mascota ={
    id_mascota:0,
    nombre_mascota:"",
    descripcion_mascota:"",
    edad_mascota:0,
    propietario:{
      id_propietario: -1
    }
  }
  constructor(private mascotaService:MascotaService, private propietarioService:PropietarioService) {
    this.propietarioService.listaPropietario().subscribe(
      (d) => this.propietario = d
    )
  }

    /*======= METODO PARA REGISTRAR MASCOTA =======*/
  registrarMascota(){
    this.mascotaService.servicioRegistrarMascota(this.mascotaObj).subscribe(
      (x)=>{ alert(x.mensaje)
        }
    );
  }
  /*======= METODO LISTAR PROPIETARIO POR NOMBRE DNI =======*/
  listaIncidenteConFiltro(){
    this.mascotaService.servicioListaMascotaConFiltro(this.filtro==""?"todos":this.filtro).subscribe(
      (x)=> this.mascota = x
    )
  }
  ngOnInit(): void {
  }

}
