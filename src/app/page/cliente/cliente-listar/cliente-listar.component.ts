import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { MatDialog } from '@angular/material/dialog';
import { ClienteDialogoComponent } from './cliente-dialogo/cliente-dialogo.component';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {
  dataSource:MatTableDataSource<Cliente>=new MatTableDataSource();
  private idMayor:number=0;
  displayedColumns:string[]=['id','nombre','apellido','correo','telefono','direccion','acciones','accion2'];
  constructor(private cService:ClienteService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.cService.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })

    this.cService.getLista().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
    this.cService.getConfirmaEliminacion().subscribe(data=>{
      data==true? this.eliminar(this.idMayor):false;
    });
  }
  confirmar(id:number){
    this.idMayor=id;
    this.dialog.open(ClienteDialogoComponent);
  }
  
  eliminar(id:number){
    this.cService.eliminar(id).subscribe(()=>{
      this.cService.listar().subscribe(data=>{
        this.cService.setLista(data);
      });
    });
  }
}
