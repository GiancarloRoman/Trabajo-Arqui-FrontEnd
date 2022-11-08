import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CarritoComprasService } from 'src/app/service/carrito-compras.service';

@Component({
  selector: 'app-carrito-dialogo',
  templateUrl: './carrito-dialogo.component.html',
  styleUrls: ['./carrito-dialogo.component.css']
})
export class CarritoDialogoComponent implements OnInit {

  constructor(private carritoService: CarritoComprasService,
    private dialogRef: MatDialogRef<CarritoDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.carritoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
