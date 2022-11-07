import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/app/model/tienda';
import { TiendaService } from 'src/app/service/tienda.service';

@Component({
  selector: 'app-tienda-buscar',
  templateUrl: './tienda-buscar.component.html',
  styleUrls: ['./tienda-buscar.component.css']
})
export class TiendaBuscarComponent implements OnInit {

  constructor(private tiendaService:TiendaService) { }
  textoBuscar: string = ""
  ngOnInit(): void {
  }
  buscar(e:any){
    let array: Tienda[]=[];  
    this.tiendaService.listar().subscribe(data=>{
      data.forEach((element, index) => {  
        if (element.nombreTienda.includes(e.target.value)) {
          array.push(data[index]);
        }
         });
      this.tiendaService.setLista(array);
       })
    }
}
