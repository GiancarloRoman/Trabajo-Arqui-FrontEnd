
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Talla } from 'src/app/model/talla';
import { TallaService } from 'src/app/service/talla.service';
import { MatDialog } from '@angular/material/dialog';
import { TallaDialogoComponent } from './talla-dialogo/talla-dialogo.component';

@Component({
  selector: 'app-talla-listar',
  templateUrl: './talla-listar.component.html',
  styleUrls: ['./talla-listar.component.css']
})
export class TallaListarComponent implements OnInit {
  dataSource:MatTableDataSource<Talla>=new MatTableDataSource();
  displayedColumns:string[]=['id','letraTalla','acciones','accion2'];
  private idMayor:number=0;
  constructor(private tService:TallaService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.tService.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })

    this.tService.getLista().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });

    this.tService.getConfirmaEliminacion().subscribe(data=>{
      data==true? this.eliminar(this.idMayor):false;
    });
  }
  confirmar(id:number){
    this.idMayor=id;
    this.dialog.open(TallaDialogoComponent);
  }
    
  eliminar(id:number){
    this.tService.eliminar(id).subscribe(()=>{
      this.tService.listar().subscribe(data=>{
        this.tService.setLista(data);
      });
    });
  }
    
}
