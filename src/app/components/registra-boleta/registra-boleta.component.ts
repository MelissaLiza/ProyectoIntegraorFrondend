import { Component, OnInit } from '@angular/core';
import { BoletaService } from 'src/app/services/boleta.service';
import { ServicioService } from 'src/app/services/servicio.service';
 import { Servicio } from 'src/app/models/servicio.model';
import { Departamento } from 'src/app/models/departamento.model';
import { Propietario } from 'src/app/models/propietario.model';
import { Boleta } from 'src/app/models/boleta.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { PropietarioService } from 'src/app/services/propietario.service';
import { MatDatepickerInput } from '@angular/material/datepicker'; 


@Component({
  selector: 'app-registra-boleta',
  templateUrl: './registra-boleta.component.html',
  styleUrls: ['./registra-boleta.component.css']
})
export class RegistraBoletaComponent implements OnInit {

  constructor(private servicioService: ServicioService,private boletaService: BoletaService,private departamentoService: DepartamentoService 
    ,private propietarioService: PropietarioService) { 

    this.servicioService.listaServicios().subscribe(visi => { this.lstServicios = visi })
    this.departamentoService.listarDepartamento().subscribe(depas => { this.lstDepa = depas })
    this.propietarioService.listaPropietario().subscribe(propie => { this.lstPropi = propie })


  }

  lstServicios: Servicio[] = [];
  lstDepa: Departamento[] = [];
  lstPropi: Propietario[] = [];
  boletas: Boleta[]=[];

DataBoleta : Boleta = {
  servicio: {
    id_servicio: 0
  },
  departamento: {
    id_departamento: 0
  },
  ultimo_Dia_Pago :"",
  fecha_pago_boleta :"",
  estado_boleta :0,

}




  ngOnInit(): void {

    this.getServicios();
    this.getBoleta();
  }

  getServicios(){
   this.servicioService.listaServicios().subscribe(
        res=>{
                console.log(res);     
        },
        err=>{}
            );

    }

    getBoleta(){
      this.boletaService.listaBoletas().subscribe(
        response => this.boletas = response
        )  
       }





       registraBoleta() {
        console.log(this.DataBoleta);
        let fecha =  new Date();
       let result = fecha.toLocaleString();
       



        this.DataBoleta.fecha_pago_boleta = "" + result;
         this.boletaService.RegistraBoleta(this.DataBoleta).subscribe(
          (Response) => {
          console.log(Response.mensaje);
           alert(Response.mensaje);
           this.boletaService.listaBoletas().subscribe(
          
              response => this.boletas = response
           )
          },
         (error) => {
            console.log(console.error);
           alert(console.error);
         }
       );
      
      
      }


      actualizaEstado(aux: Boleta) {
        console.log(" ==> En actualizaEstado() ");
    
        //Cambia el estado
        this.DataBoleta = aux;
        this.DataBoleta.estado_boleta = (aux.estado_boleta == 1) ? 2 : 1;
        let fecha =  new Date();
        let result = fecha.toLocaleString();
        this.DataBoleta.fecha_pago_boleta = ""+result;
    
        this.boletaService.actualiza(this.DataBoleta).subscribe(
          response => {
            console.log(response.mensaje);
    
            this.boletaService.listaBoletas().subscribe(
          
              response => this.boletas = response
           );
              

           this.DataBoleta = {
            id_boleta :0,
            servicio: {
              id_servicio: 0
            },
            departamento: {
              id_departamento: 0
            },
            ultimo_Dia_Pago :"",
            fecha_pago_boleta :"",
            estado_boleta :0,
          
          }
          
},
          error => {
            console.log(error);
          },
    
    
        );
    
    
      }



}
