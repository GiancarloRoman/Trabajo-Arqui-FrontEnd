import { Component, OnInit } from '@angular/core';
import { Carrito_Compras } from 'src/app/model/carrito_compras';
import { CarritoComprasService } from 'src/app/service/carrito-compras.service';

@Component({
  selector: 'app-carrito-buscar',
  templateUrl: './carrito-buscar.component.html',
  styleUrls: ['./carrito-buscar.component.css']
})
export class CarritoBuscarComponent implements OnInit {

  textoBuscar: string = ""
  constructor(private carritoService:CarritoComprasService) { }

  ngOnInit(): void {
  }

    buscar(e:any){
    let array: Carrito_Compras[]=[];  
    this.carritoService.listar().subscribe(data=>{
      data.forEach((element, index) => {  
        if (element.prenda.nombrePrenda.includes(e.target.value)) {
          array.push(data[index]);
        }
         });
      this.carritoService.setLista(array);
       })
    }
}
