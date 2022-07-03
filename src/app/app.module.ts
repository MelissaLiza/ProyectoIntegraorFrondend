import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistraVisitaComponent } from './components/registra-visita/registra-visita.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { RegistraPropietarioComponent } from './components/registra-propietario/registra-propietario.component';

import { RegistraBoletaComponent } from './components/registra-boleta/registra-boleta.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component'; 
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    RegistraVisitaComponent,
    LoginComponent,
    MenuComponent,
    IndexComponent,
    RegistraPropietarioComponent,
    
    RegistraBoletaComponent,
    ServiciosComponent,
    DepartamentosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [DatePipe

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
