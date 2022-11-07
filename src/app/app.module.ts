import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PrendaComponent } from './page/prenda/prenda.component';
import { MatInputModule } from '@angular/material/input';
import { PrendaListarComponent } from './page/prenda/prenda-listar/prenda-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import{MatIconModule} from'@angular/material/icon';
import { MarcaComponent } from './page/marca/marca.component';
import { MarcaListarComponent } from './page/marca/marca-listar/marca-listar.component';
import { TallaComponent } from './page/talla/talla.component';
import { TallaListarComponent } from './page/talla/talla-listar/talla-listar.component';
import { TallaCreaeditaComponent } from './page/talla/talla-creaedita/talla-creaedita.component';
import { PrendaCreaeditaComponent } from './page/prenda/prenda-creaedita/prenda-creaedita.component';
import { MarcaCreaeditaComponent } from './page/marca/marca-creaedita/marca-creaedita.component';
import { PrendaDialogoComponent } from './page/prenda/prenda-listar/prenda-dialogo/prenda-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ClienteComponent } from './page/cliente/cliente.component';
import { ClienteListarComponent } from './page/cliente/cliente-listar/cliente-listar.component';
import { ClienteCreaeditaComponent } from './page/cliente/cliente-creaedita/cliente-creaedita.component';
import { TiendaComponent } from './page/tienda/tienda.component';
import { TiendaListarComponent } from './page/tienda/tienda-listar/tienda-listar.component';
import { TiendaCreaeditaComponent } from './page/tienda/tienda-creaedita/tienda-creaedita.component';
import { ClienteDialogoComponent } from './page/cliente/cliente-listar/cliente-dialogo/cliente-dialogo.component';
import { MarcaDialogoComponent } from './page/marca/marca-listar/marca-dialogo/marca-dialogo.component';
import { TallaDialogoComponent } from './page/talla/talla-listar/talla-dialogo/talla-dialogo.component';
import { TiendaDialogoComponent } from './page/tienda/tienda-listar/tienda-dialogo/tienda-dialogo.component';
import { ClienteBuscarComponent } from './page/cliente/cliente-buscar/cliente-buscar.component';
import { MarcaBuscarComponent } from './page/marca/marca-buscar/marca-buscar.component';
import { PrendaBuscarComponent } from './page/prenda/prenda-buscar/prenda-buscar.component';
import { TallaBuscarComponent } from './page/talla/talla-buscar/talla-buscar.component';
import { TiendaBuscarComponent } from './page/tienda/tienda-buscar/tienda-buscar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ComprobantePagoComponent } from './page/comprobante-pago/comprobante-pago.component';
import { ComprobanteListarComponent } from './page/comprobante-pago/comprobante-listar/comprobante-listar.component';
import { ComprobanteDialogoComponent } from './page/comprobante-pago/comprobante-listar/comprobante-dialogo/comprobante-dialogo.component';
import { ComprobanteCreaeditaComponent } from './page/comprobante-pago/comprobante-creaedita/comprobante-creaedita.component';
import { DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CustomDateAdapter } from './custom-adapter';
import { ComprobanteBuscarComponent } from './page/comprobante-pago/comprobante-buscar/comprobante-buscar.component';
import { CarritoComprasComponent } from './page/carrito-compras/carrito-compras.component';
import { CarritoListarComponent } from './page/carrito-compras/carrito-listar/carrito-listar.component';
import { CarritoBuscarComponent } from './page/carrito-compras/carrito-buscar/carrito-buscar.component';
import { CarritoCreaeditaComponent } from './page/carrito-compras/carrito-creaedita/carrito-creaedita.component';
import { CarritoDialogoComponent } from './page/carrito-compras/carrito-listar/carrito-dialogo/carrito-dialogo.component';
@NgModule({
  declarations: [
    AppComponent,
    PrendaComponent,
    PrendaListarComponent,
    MarcaComponent,
    MarcaListarComponent,
    TallaComponent,
    TallaListarComponent,
    TallaCreaeditaComponent,
    PrendaCreaeditaComponent,
    MarcaCreaeditaComponent,
    PrendaDialogoComponent,
    ClienteComponent,
    ClienteListarComponent,
    ClienteCreaeditaComponent,
    TiendaComponent,
    TiendaListarComponent,
    TiendaCreaeditaComponent,
    ClienteDialogoComponent,
    MarcaDialogoComponent,
    TallaDialogoComponent,
    TiendaDialogoComponent,
    ClienteBuscarComponent,
    MarcaBuscarComponent,
    PrendaBuscarComponent,
    TallaBuscarComponent,
    TiendaBuscarComponent,
    ComprobantePagoComponent,
    ComprobanteListarComponent,
    ComprobanteDialogoComponent,
    ComprobanteCreaeditaComponent,
    ComprobanteBuscarComponent,
    CarritoComprasComponent,
    CarritoListarComponent,
    CarritoBuscarComponent,
    CarritoCreaeditaComponent,
    CarritoDialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  { provide: DateAdapter, useClass: CustomDateAdapter }],
  bootstrap: [AppComponent]
})
export class AppModule { }
