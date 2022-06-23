import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistraVisitaComponent } from './components/registra-visita/registra-visita.component';
import { LoginComponent } from './auth/login.component';
import { IndexComponent } from './index/index.component';
import { RegistraPropietarioComponent } from './components/registra-propietario/registra-propietario.component';
import { RegistraBoletaComponent } from './components/registra-boleta/registra-boleta.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 


const routes: Routes = [
  {path:"registraVisita", component:RegistraVisitaComponent },
  {path:"registraPropietario", component:RegistraPropietarioComponent },
  {path:"registraBoleta", component:RegistraBoletaComponent },

  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatDatepickerModule, MatNativeDateModule],
  exports: [RouterModule],
})
export class AppRoutingModule {


}
