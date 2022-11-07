import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PrendaService } from 'src/app/service/prenda.service';

@Component({
  selector: 'app-prenda-dialogo',
  templateUrl: './prenda-dialogo.component.html',
  styleUrls: ['./prenda-dialogo.component.css']
})
export class PrendaDialogoComponent implements OnInit {

  constructor(private prendaService: PrendaService,
    private dialogRef: MatDialogRef<PrendaDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.prendaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
