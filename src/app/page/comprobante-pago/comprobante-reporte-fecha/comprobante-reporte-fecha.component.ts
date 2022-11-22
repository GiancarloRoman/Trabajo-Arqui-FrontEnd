import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ComprobanteFecha } from 'src/app/model/comprobantefecha';
import { ComprobantePagoService } from 'src/app/service/comprobante-pago.service';

@Component({
  selector: 'app-comprobante-reporte-fecha',
  templateUrl: './comprobante-reporte-fecha.component.html',
  styleUrls: ['./comprobante-reporte-fecha.component.css']
})
export class ComprobanteReporteFechaComponent implements OnInit {

  lista: ComprobanteFecha[] = [];
  dataSource: MatTableDataSource<ComprobanteFecha> = new MatTableDataSource();
  displayedColumns: string[] = ['fecha', 'cantidad'];
  constructor(private pService: ComprobantePagoService) { }

  ngOnInit(): void {
    this.pService.comprobantefecha().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
