import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Marca } from 'src/app/model/marca';
import { MarcaService } from 'src/app/service/marca.service';
import { MatDialog } from '@angular/material/dialog';
import { MarcaDialogoComponent } from './marca-dialogo/marca-dialogo.component';

@Component({
  selector: 'app-marca-listar',
  templateUrl: './marca-listar.component.html',
  styleUrls: ['./marca-listar.component.css']
})
export class MarcaListarComponent implements OnInit {
  dataSource:MatTableDataSource<Marca>=new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','acciones','accion2'];
  private idMayor:number=0;
  constructor(private mService:MarcaService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.mService.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })

    this.mService.getLista().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })

    this.mService.getConfirmaEliminacion().subscribe(data=>{
      data==true? this.eliminar(this.idMayor):false;
    })
  }
  confirmar(id:number){
    this.idMayor=id;
    this.dialog.open(MarcaDialogoComponent);
  }

  eliminar(id:number){
    this.mService.eliminar(id).subscribe(()=>{
      this.mService.listar().subscribe(data=>{
        this.mService.setLista(data);
      });
    });
  }

}
