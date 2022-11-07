import { Marca } from "./marca";
import { Talla } from "./talla";
import { Tienda } from "./tienda";

export class Prenda{
    idPrenda:number=0;
    nombrePrenda: string= "";
    colorPrenda: string="";
    disenioPrenda: string="";
    tienda: Tienda = new Tienda();
    marca: Marca = new Marca();
    talla: Talla = new Talla();
}
