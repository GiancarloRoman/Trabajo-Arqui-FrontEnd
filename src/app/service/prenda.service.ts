import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Prenda } from '../model/prenda';
import { EMPTY, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrendaService {
  private url: string = "http://localhost:8080/prendas";
  private listacambio = new Subject<Prenda[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Prenda[]>(this.url);
  }
  insertar(prenda: Prenda) {
    return this.http.post(this.url, prenda);
  }
  setLista(listaNueva: Prenda[]) {
    this.listacambio.next(listaNueva);
  }
  getLista() {
    return this.listacambio.asObservable();
  }
  modificar(prenda: Prenda) {
    return this.http.put(this.url, prenda);
  }
  listarId(id: number) {
    return this.http.get<Prenda>(`${this.url}/${id}`);
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
      return this.http.post<Prenda[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
