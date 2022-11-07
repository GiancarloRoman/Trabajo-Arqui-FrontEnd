import { Component, OnInit } from '@angular/core';
import { Prenda } from 'src/app/model/prenda';
import { PrendaService } from 'src/app/service/prenda.service';

@Component({
  selector: 'app-prenda-buscar',
  templateUrl: './prenda-buscar.component.html',
  styleUrls: ['./prenda-buscar.component.css']
})
export class PrendaBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private prendaService:PrendaService) { }

  ngOnInit(): void {
  }

    buscar(e:any){
    let array: Prenda[]=[];  
    this.prendaService.listar().subscribe(data=>{
      data.forEach((element, index) => {  
        if (element.nombrePrenda.includes(e.target.value)) {
          array.push(data[index]);
        }
         });
      this.prendaService.setLista(array);
       })
    }
}
