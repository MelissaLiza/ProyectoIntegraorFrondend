import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { PropietarioService } from 'src/app/services/propietario.service';
import { Propietario } from 'src/app/models/propietario.model';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {
  public departamento!: Departamento[];
  public propietarios!: Propietario[];
  public editDepartamento!: Departamento;
  public deleteDepartamento!: Departamento;


  departamentos : Departamento = {
    
    id_departamento :0,
    numero_departamento :0,
    tamanom2_departamento :0,
    propietario: {
      id_propietario: 0
     

    }
     
  };

  constructor(private departamentoService: DepartamentoService, private propietarioService: PropietarioService) { }

  ngOnInit(): void {
    this.getDepartamento();
    this.getPropietarios();
  }


  getPropietarios(){
  
    this.propietarioService.listaPropietario().subscribe(
      
      response => this.propietarios = response
      
  
  
    )
  }

  public getDepartamento(): void {
    this.departamentoService.listarDepartamento().subscribe(
      (response: Departamento[]) => {
        this.departamento = response;
        console.log(this.departamento);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddDepartamento(addForm: NgForm){
    document.getElementById('add-employee-form')!.click();
    this.departamentoService.addDepartamentos(this.departamentos).subscribe(
      (x)=>{
        this.getDepartamento();
        addForm.reset();
        
      }
    );
   
  }



  public onUpdateDepartamento(departamento: Departamento): void {
    console.log(departamento);
    
    this.departamentoService.updateDepartamentos(this.departamentos).subscribe(
      (response: Departamento) => {
        console.log(response);
        this.getDepartamento();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  public onDeleteDepartamento(iddepartamento: number): void {
    this.departamentoService.deleteDepartamentos(iddepartamento).subscribe(
      (response: void) => {
        console.log(response);
        this.getDepartamento();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onOpenModal(departamento: Departamento, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProductosModal');
    }
    if (mode === 'edit') {
      this.departamentos = departamento;
      console.log("entro a edit"+departamento.propietario?.id_propietario);
      button.setAttribute('data-target', '#updateProductosModal');
    }
    if (mode === 'delete') {
      this.deleteDepartamento = departamento;
      button.setAttribute('data-target', '#deleteProductosModal');
    }
    
    
     container!.appendChild(button);
    button.click();
  }


}
