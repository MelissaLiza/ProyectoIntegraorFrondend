import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Propietario } from 'src/app/models/propietario.model';
import { RegistroVisita } from 'src/app/models/registro-visita.model';
import { Visitante } from 'src/app/models/visitante.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { VisitaService } from 'src/app/services/visita.service';

@Component({
  selector: 'app-registra-visita',
  templateUrl: './registra-visita.component.html',
  styleUrls: ['./registra-visita.component.css']
})
export class RegistraVisitaComponent implements OnInit {

  constructor(private visitaservice: VisitaService , private departamentoService: DepartamentoService) {
    this.departamentoService.listarDepartamento().subscribe(depas => { this.lstDepa = depas })
    this.visitaservice.listaVisitante().subscribe(visi => { this.lstVisi = visi })
  
   }



   lstVisi: Visitante[] = [];
   lstDepa: Departamento[] = [];
   lstPropie: Propietario[] = [];
  visitantes: Visitante[] = [];
  visitas: RegistroVisita[] = [];
  

  visitante : Visitante = {
    nombre_visitante :"",
    apellido_visitante :"",
    telefono_visitante: 0,
    dni_visitante:"",
     
  };

  registrovisita : RegistroVisita = {
    
    fecha_ingreso :"",
    fecha_salida :"",
    departamento: {
      id_departamento: 0
     

    },
    visitante: {
      id_visitante: 0
     
    },
     
  };




  ngOnInit(): void {
this.getVisitante();
this.getVisitas();

  }

getVisitante(){
  
  this.visitaservice.listaVisitante().subscribe(
    
    response => this.visitantes = response
   


  )
}

getVisitas(){
  
  this.visitaservice.listaVisita().subscribe(
    
    response => this.visitas = response
   


  )
}




registra() {
  console.log('>>> registrar()');
  console.log(this.visitante);
  this.visitante.estado_visitante=1;
  this.visitaservice.RegistraVisitante(this.visitante).subscribe(
    (Response) => {
      console.log(Response.mensaje);
      alert(Response.mensaje);
      this.visitaservice.listaVisitante().subscribe(
    
        response => this.visitantes = response
       
    
    
      )
      
    },
    (error) => {
      console.log(console.error);
      alert(console.error);
    }
  );


}

registraVisita() {
  console.log('>>> registrarVisitante()');
  console.log(this.registrovisita);
  let fecha =  new Date();
  this.registrovisita.fecha_ingreso = "" + fecha;
  this.visitaservice.RegistraVisita(this.registrovisita).subscribe(
    (Response) => {
      console.log(Response.mensaje);
      alert(Response.mensaje);
      this.visitaservice.listaVisita().subscribe(
    
        response => this.visitas = response
       
    
    
      )
      
    },
    (error) => {
      console.log(console.error);
      alert(console.error);
    }
  );


}
}