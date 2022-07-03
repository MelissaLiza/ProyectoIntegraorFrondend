import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicio.model';
import { ServicioService } from 'src/app/services/servicio.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  public servicio!: Servicio[];
  public editServicio!: Servicio;
  public deleteServicio!: Servicio;

  servicios : Servicio = {
    
    id_servicio :0,
    descripcion_servicio :""
   
     
  };


  constructor(private servicioService: ServicioService) { }

  ngOnInit(): void {
    this.getServicios()
  }



  getServicios(){
  
    this.servicioService.listaServicios().subscribe(
     
      response => this.servicio = response
     
  
  
    )
  }

 


  public onAddDepartamento(addForm: NgForm){
    document.getElementById('add-employee-form')!.click();
    this.servicioService.addServicio(this.servicios).subscribe(
      (x)=>{
        this.getServicios();
        addForm.reset();
        
      }
    );
   
  }



  public onUpdateDepartamento(servicio: Servicio): void {
    console.log(servicio);
    
    this.servicioService.updateServicio(this.servicios).subscribe(
      (response: Servicio) => {
        console.log(response);
        this.getServicios();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  public onDeleteDepartamento(idSericio: number): void {
    this.servicioService.deleteServicio(idSericio).subscribe(
      (response: void) => {
        console.log(response);
        this.getServicios();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onOpenModal(servicio: Servicio, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProductosModal');
    }
    if (mode === 'edit') {
      this.servicios = servicio;
      
      button.setAttribute('data-target', '#updateProductosModal');
    }
    if (mode === 'delete') {
      this.deleteServicio = servicio;
      button.setAttribute('data-target', '#deleteProductosModal');
    }
    
    
     container!.appendChild(button);
    button.click();
  }
}
