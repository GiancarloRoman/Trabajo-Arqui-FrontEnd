import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MarcaService } from 'src/app/service/marca.service';

@Component({
  selector: 'app-marca-dialogo',
  templateUrl: './marca-dialogo.component.html',
  styleUrls: ['./marca-dialogo.component.css']
})
export class MarcaDialogoComponent implements OnInit {

  constructor(private marcaService:MarcaService,
    private dialogoRef:MatDialogRef<MarcaDialogoComponent>
    ) { }

  ngOnInit(): void {
  }
  confirmar(estado:boolean){
    this.marcaService.setConfirmaEliminacion(estado);
    this.dialogoRef.close();
  }

}
