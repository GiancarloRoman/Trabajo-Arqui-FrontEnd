import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TiendaService } from 'src/app/service/tienda.service';

@Component({
  selector: 'app-tienda-dialogo',
  templateUrl: './tienda-dialogo.component.html',
  styleUrls: ['./tienda-dialogo.component.css']
})
export class TiendaDialogoComponent implements OnInit {

  constructor(private tiendaService:TiendaService,
    private dialogRef:MatDialogRef<TiendaDialogoComponent>
    ) { }

  ngOnInit(): void {
  }
  confirmar(estado:boolean){
    this.tiendaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
