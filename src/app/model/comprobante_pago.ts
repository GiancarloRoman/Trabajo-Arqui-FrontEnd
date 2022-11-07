import { Carrito_Compras } from "./carrito_compras";
import { Cliente } from "./cliente";

export class Comprobante_Pago{
    idComprobante_Pago:number=0;
    tipoComprobante:String = "";
    montototal:number=0;
    preciounitario:number=0;
    fecha:String = "";
    razonsocial:String="";
    cliente:Cliente = new Cliente();
    carritocompras:Carrito_Compras=new Carrito_Compras();
}
