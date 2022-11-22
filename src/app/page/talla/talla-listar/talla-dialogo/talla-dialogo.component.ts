import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TallaService } from 'src/app/service/talla.service';

@Component({
  selector: 'app-talla-dialogo',
  templateUrl: './talla-dialogo.component.html',
  styleUrls: ['./talla-dialogo.component.css']
})
export class TallaDialogoComponent implements OnInit {

  constructor(private tallaService:TallaService,
    private dialogRef:MatDialogRef<TallaDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado:boolean){
    this.tallaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}



