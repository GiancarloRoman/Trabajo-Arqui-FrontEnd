import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Marca } from 'src/app/model/marca';
import { Prenda } from 'src/app/model/prenda';
import { Talla } from 'src/app/model/talla';
import { Tienda } from 'src/app/model/tienda';
import { MarcaService } from 'src/app/service/marca.service';
import { PrendaService } from 'src/app/service/prenda.service';
import { TallaService } from 'src/app/service/talla.service';
import { TiendaService } from 'src/app/service/tienda.service';

@Component({
  selector: 'app-prenda-creaedita',
  templateUrl: './prenda-creaedita.component.html',
  styleUrls: ['./prenda-creaedita.component.css']
})
export class PrendaCreaeditaComponent implements OnInit {
  prenda: Prenda = new Prenda();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  listaTiendas: Tienda[] = [];
  idTiendaSeleccionada: number = 0;
  listaMarcas: Marca[] = [];
  idMarcaSeleccionada: number = 0;
  listaTallas: Talla[] = [];
  idTallaSeleccionada: number = 0;
  
  constructor(private prendaService: PrendaService,
    private router: Router, private route: ActivatedRoute, private tiendaService:TiendaService,
    private marcaService:MarcaService, private tallaService:TallaService,) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.tiendaService.listar().subscribe(data => { this.listaTiendas = data });
    this.marcaService.listar().subscribe(data => { this.listaMarcas = data });
    this.tallaService.listar().subscribe(data => { this.listaTallas = data });
  }
  
  aceptar(): void {
    if (this.prenda.nombrePrenda.length > 0 && this.idTiendaSeleccionada>0 && this.idMarcaSeleccionada>0 && this.idTallaSeleccionada>0) {
      let t = new Tienda();
      t.idTienda = this.idTiendaSeleccionada;
      this.prenda.tienda=t;
      let m = new Marca();
      m.idMarca = this.idMarcaSeleccionada;
      this.prenda.marca=m;
      let ta = new Talla();
      ta.idTalla = this.idTallaSeleccionada;
      this.prenda.talla=ta;

      if (this.edicion) {
        this.prendaService.modificar(this.prenda).subscribe(() => {
          this.prendaService.listar().subscribe(data => {
            this.prendaService.setLista(data);
          })
        })
      }
      else {
        this.prendaService.insertar(this.prenda).subscribe(()=>{
          this.prendaService.listar().subscribe(data=>{
            this.prendaService.setLista(data);
          });
        });
      }
      this.router.navigate(['prendas']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  
 init() {
    if (this.edicion) {
      this.prendaService.listarId(this.id).subscribe(data => {
        this.prenda = data;
        console.log(data);
        this.idTiendaSeleccionada=data.tienda.idTienda;
        this.idTallaSeleccionada=data.talla.idTalla;
        this.idMarcaSeleccionada=data.marca.idMarca;
      })
    }
  }
}
 
