import { Component, OnInit } from '@angular/core';
import { Comprobante_Pago } from 'src/app/model/comprobante_pago';
import { ComprobantePagoService } from 'src/app/service/comprobante-pago.service';

@Component({
  selector: 'app-comprobante-buscar',
  templateUrl: './comprobante-buscar.component.html',
  styleUrls: ['./comprobante-buscar.component.css']
})
export class ComprobanteBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private comprobanteService:ComprobantePagoService) { }

  ngOnInit(): void {
  }
  buscar(e:any){
    let array: Comprobante_Pago[]=[];  
    this.comprobanteService.listar().subscribe(data=>{
      data.forEach((element, index) => {  
        if (element.cliente.nombreCliente.includes(e.target.value)) {
          array.push(data[index]);
        }
         });
      this.comprobanteService.setLista(array);
       })
    }
}
