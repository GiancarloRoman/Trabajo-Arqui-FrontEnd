import { Component, OnInit } from '@angular/core';
import { Talla } from 'src/app/model/talla';
import { TallaService } from 'src/app/service/talla.service';

@Component({
  selector: 'app-talla-buscar',
  templateUrl: './talla-buscar.component.html',
  styleUrls: ['./talla-buscar.component.css']
})
export class TallaBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private tallaService:TallaService) { }

  ngOnInit(): void {
  }

  buscar(e:any){
    let array: Talla[]=[];  
    this.tallaService.listar().subscribe(data=>{
      data.forEach((element, index) => {  
        if (element.letraTalla.includes(e.target.value)) {
          array.push(data[index]);
        }
         });
      this.tallaService.setLista(array);
       })
    }
}
