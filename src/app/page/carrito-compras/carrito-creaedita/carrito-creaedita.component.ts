import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Carrito_Compras } from 'src/app/model/carrito_compras';
import { Prenda } from 'src/app/model/prenda';
import { CarritoComprasService } from 'src/app/service/carrito-compras.service';
import { PrendaService } from 'src/app/service/prenda.service';

@Component({
  selector: 'app-carrito-creaedita',
  templateUrl: './carrito-creaedita.component.html',
  styleUrls: ['./carrito-creaedita.component.css']
})
export class CarritoCreaeditaComponent implements OnInit {

  carrito: Carrito_Compras = new Carrito_Compras();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  listaPrendas: Prenda[] = [];
  idPrendaSeleccionada: number = 0;

  constructor(private carritoService: CarritoComprasService,
    private router: Router, private route: ActivatedRoute, private prendaService:PrendaService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.prendaService.listar().subscribe(data => { this.listaPrendas = data });
  }

  aceptar(): void {
    if (this.carrito.cantidad > 0 && this.idPrendaSeleccionada>0) {
      let p = new Prenda();
      p.idPrenda = this.idPrendaSeleccionada;
      this.carrito.prenda=p;

      if (this.edicion) {
        this.carritoService.modifcar(this.carrito).subscribe(() => {
          this.carritoService.listar().subscribe(data => {
            this.carritoService.setLista(data);
          })
        })
      }
      else {
        this.carritoService.insertar(this.carrito).subscribe(()=>{
          this.carritoService.listar().subscribe(data=>{
            this.carritoService.setLista(data);
          });
        });
      }
      this.router.navigate(['carrito_compras']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }


  init() {
    if (this.edicion) {
      this.carritoService.listarId(this.id).subscribe(data => {
        this.carrito = data;
        console.log(data);
        this.idPrendaSeleccionada=data.prenda.idPrenda;
      })
    }
  }
}
