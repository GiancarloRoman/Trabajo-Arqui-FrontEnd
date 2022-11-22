import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Comprobante_Pago } from '../model/comprobante_pago';
import { EMPTY, Subject } from 'rxjs';
import { ComprobanteFecha } from '../model/comprobantefecha';



@Injectable({
  providedIn: 'root'
})
export class ComprobantePagoService {

  url: string = "http://localhost:8080/comprobantes_pago";
  private listacambio = new Subject<Comprobante_Pago[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Comprobante_Pago[]>(this.url);
  }
  insertar(comprobante: Comprobante_Pago) {
    return this.http.post(this.url, comprobante);
  }
  setLista(listaNueva: Comprobante_Pago[]) {
    this.listacambio.next(listaNueva);
  }
  getLista() {
    return this.listacambio.asObservable();
  }
  modificar(comprobante: Comprobante_Pago) {
    return this.http.put(this.url, comprobante);
  }
  listarId(id: number) {
    return this.http.get<Comprobante_Pago>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado)
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Comprobante_Pago[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
  comprobantefecha() {
    return this.http.get<ComprobanteFecha[]>(`${this.url}/comprobantefecha`);
  }
}
