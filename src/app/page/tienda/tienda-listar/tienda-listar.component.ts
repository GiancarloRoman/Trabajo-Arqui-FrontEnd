import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Tienda } from 'src/app/model/tienda';
import { TiendaService } from 'src/app/service/tienda.service';
import { TiendaDialogoComponent } from './tienda-dialogo/tienda-dialogo.component';

@Component({
  selector: 'app-tienda-listar',
  templateUrl: './tienda-listar.component.html',
  styleUrls: ['./tienda-listar.component.css']
})
export class TiendaListarComponent implements OnInit {
  dataSource:MatTableDataSource<Tienda>= new MatTableDataSource();
  displayedColumns:string[]=['id','nombreTienda','direccionTienda','correo','telefono','acciones','accion2'];
  private idMayor:number=0;
  constructor(private tService: TiendaService,private dialog:MatDialog) { }

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
    this.dialog.open(TiendaDialogoComponent);
  }
  eliminar(id:number){
    this.tService.eliminar(id).subscribe(()=>{
      this.tService.listar().subscribe(data=>{
        this.tService.setLista(data);
      });
    });
  }

}
