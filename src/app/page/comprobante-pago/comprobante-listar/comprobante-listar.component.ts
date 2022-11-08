import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Comprobante_Pago } from 'src/app/model/comprobante_pago';
import { ComprobantePagoService } from 'src/app/service/comprobante-pago.service';
import { ComprobanteDialogoComponent } from './comprobante-dialogo/comprobante-dialogo.component';

@Component({
  selector: 'app-comprobante-listar',
  templateUrl: './comprobante-listar.component.html',
  styleUrls: ['./comprobante-listar.component.css']
})
export class ComprobanteListarComponent implements OnInit {
  dataSource: MatTableDataSource<Comprobante_Pago> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'tipocomprobante', 'montototal', 'preciounitario', 'razonsocial', 'fecha', 'cliente', 'carritocompras','acciones', 'accion2'];
  private idMayor: number = 0;
  constructor(private cpService: ComprobantePagoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cpService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.cpService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.cpService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ComprobanteDialogoComponent);
  }

  eliminar(id: number) {
    this.cpService.eliminar(id).subscribe(() => {
      this.cpService.listar().subscribe(data => {
        this.cpService.setLista(data);
      });
    });
  }

}
