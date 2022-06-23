import { Departamento } from "./departamento.model";
import { Visitante } from "./visitante.model";

export class RegistroVisita {

    id_visita?:number;
    fecha_ingreso?:string;
    fecha_salida?:string;
    departamento?:Departamento
    visitante?:Visitante

}
