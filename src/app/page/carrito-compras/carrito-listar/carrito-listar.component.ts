import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Carrito_Compras } from 'src/app/model/carrito_compras';
import { CarritoComprasService } from 'src/app/service/carrito-compras.service';
import { CarritoDialogoComponent } from './carrito-dialogo/carrito-dialogo.component';

@Component({
  selector: 'app-carrito-listar',
  templateUrl: './carrito-listar.component.html',
  styleUrls: ['./carrito-listar.component.css']
})
export class CarritoListarComponent implements OnInit {

  dataSource: MatTableDataSource<Carrito_Compras> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'prenda', 'cantidad', 'acciones', 'accion2'];
  private idMayor: number = 0;
  constructor(private cpService: CarritoComprasService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cpService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.cpService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.cpService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(CarritoDialogoComponent);
  }

  eliminar(id: number) {
    this.cpService.eliminar(id).subscribe(() => {
      this.cpService.listar().subscribe(data => {
        this.cpService.setLista(data);
      });
    });
  }

}
