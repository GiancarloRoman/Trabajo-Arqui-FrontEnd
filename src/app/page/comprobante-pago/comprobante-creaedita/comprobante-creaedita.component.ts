import { Component, OnInit } from '@angular/core';
import { Carrito_Compras } from 'src/app/model/carrito_compras';
import { Comprobante_Pago } from 'src/app/model/comprobante_pago';

import { ComprobantePagoService } from 'src/app/service/comprobante-pago.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CarritoComprasService } from 'src/app/service/carrito-compras.service';

import * as moment from 'moment';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
@Component({
  selector: 'app-comprobante-creaedita',
  templateUrl: './comprobante-creaedita.component.html',
  styleUrls: ['./comprobante-creaedita.component.css']
})
export class ComprobanteCreaeditaComponent implements OnInit {
  comprobante: Comprobante_Pago = new Comprobante_Pago();
  mensaje: string = "";
  mensaje1: string = "";
  edicion: boolean = false;
  id: number = 0;
  listaClientes: Cliente[] = [];
  idClienteSeleccionado: number = 0;
  listaCarritoCompras: Carrito_Compras[] = [];
  idCarritoComprasSeleccionado: number = 0;
  fechaSeleccionada: Date = moment().add('days').toDate();
  maxFecha: Date = moment().add('days').toDate();
  constructor(private comprobanteService: ComprobantePagoService,
    private route: ActivatedRoute,
    private router: Router, private clienteService: ClienteService, private carritoService: CarritoComprasService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.clienteService.listar().subscribe(data => { this.listaClientes = data });
    this.carritoService.listar().subscribe(data => { this.listaCarritoCompras = data });
  }

  aceptar() {
    if (this.comprobante.razonsocial.length > 0 &&
      this.comprobante.tipoComprobante.length>0 && this.comprobante.montototal >0 && this.comprobante.preciounitario>0
      && this.idCarritoComprasSeleccionado>0 && this.idClienteSeleccionado>0) {
      let c = new Cliente();
      c.idCliente = this.idClienteSeleccionado;
      this.comprobante.cliente = c;
      let ca = new Carrito_Compras();
      ca.idCarrito_Compras = this.idCarritoComprasSeleccionado;
      this.comprobante.carritocompras = ca;
      this.comprobante.fecha = moment(this.fechaSeleccionada).format('YYYY-MM-DDTHH:mm:ss');
      if (this.edicion) {
        this.comprobanteService.modificar(this.comprobante).subscribe(() => {
          this.comprobanteService.listar().subscribe(data => {
            this.comprobanteService.setLista(data);
          });
        });

      } else {
        this.comprobanteService.insertar(this.comprobante).subscribe(() => {
          this.comprobanteService.listar().subscribe(data => {
            this.comprobanteService.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['comprobante_pago']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.comprobanteService.listarId(this.id).subscribe(data => {
        this.comprobante = data
        console.log(data);
        this.idCarritoComprasSeleccionado = data.carritocompras.idCarrito_Compras;
        this.idClienteSeleccionado = data.cliente.idCliente;
      });

    }

  }


}
