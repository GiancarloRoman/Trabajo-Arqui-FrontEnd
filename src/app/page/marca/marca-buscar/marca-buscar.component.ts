port { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/model/marca';
import { MarcaService } from 'src/app/service/marca.service';

@Component({
  selector: 'app-marca-buscar',
  templateUrl: './marca-buscar.component.html',
  styleUrls: ['./marca-buscar.component.css']
})
export class MarcaBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private marcaService:MarcaService) { }

  ngOnInit(): void {
  }
  buscar(e:any){
    let array: Marca[]=[];  
    this.marcaService.listar().subscribe(data=>{
      data.forEach((element, index) => {  
        if (element.nombreMarca.includes(e.target.value)) {
          array.push(data[index]);
        }
         });
      this.marcaService.setLista(array);
       })
    }

}
