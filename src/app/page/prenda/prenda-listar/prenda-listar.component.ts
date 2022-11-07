import { Component, OnInit } from '@angular/core';
import { Prenda } from 'src/app/model/prenda';
import { PrendaService } from 'src/app/service/prenda.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PrendaDialogoComponent } from './prenda-dialogo/prenda-dialogo.component';


@Component({
  selector: 'app-prenda-listar',
  templateUrl: './prenda-listar.component.html',
  styleUrls: ['./prenda-listar.component.css']
})
export class PrendaListarComponent implements OnInit {
  dataSource: MatTableDataSource<Prenda> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'prenda', 'color', 'diseno', 'tienda', 'marca', 'talla', 'acciones', 'accion2'];
  private idMayor: number = 0;
  constructor(private pService: PrendaService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.pService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.pService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.pService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(PrendaDialogoComponent);
  }

  eliminar(id: number) {
    this.pService.eliminar(id).subscribe(() => {
      this.pService.listar().subscribe(data => {
        this.pService.setLista(data);
      });
    });
  }
}
