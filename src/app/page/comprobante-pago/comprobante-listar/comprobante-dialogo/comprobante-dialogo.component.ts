import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ComprobantePagoService } from 'src/app/service/comprobante-pago.service';

@Component({
  selector: 'app-comprobante-dialogo',
  templateUrl: './comprobante-dialogo.component.html',
  styleUrls: ['./comprobante-dialogo.component.css']
})
export class ComprobanteDialogoComponent implements OnInit {

  constructor(private comprobanteService: ComprobantePagoService,
    private dialogRef: MatDialogRef<ComprobanteDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.comprobanteService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
