import { Departamento } from "./departamento.model";
import { Propietario } from "./propietario.model";
import { Servicio } from "./servicio.model";
import { Visitante } from "./visitante.model";

export class Boleta {


    id_boleta?:number;
    servicio?:Servicio;
    departamento?:Departamento;
    visitante?:Visitante;
    ultimo_Dia_Pago?:String;
    fecha_pago_boleta?:String;
    estado_boleta?:number;
}
