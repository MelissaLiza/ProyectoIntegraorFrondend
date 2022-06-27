import { Departamento } from "./departamento.model";

export class Incidente {
  id_incidente?:number;
  causa_incidente?:String;
  detalle_incidente?:String;
  solucion_incidente?:String;
  estado_incidente?:number;
  departamento?:Departamento;
}
