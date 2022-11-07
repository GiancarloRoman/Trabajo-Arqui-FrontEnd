import { Injectable } from '@angular/core';
import{HttpClient } from '@angular/common/http'
import { Tienda } from '../model/tienda';
import { EMPTY, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  url:string= "http://localhost:8080/tiendas"
  private confirmaEliminacion=new Subject<Boolean>()
  private listacambio= new Subject<Tienda[]>()
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Tienda[]>(this.url);
  }
  insertar(tienda:Tienda){
    return this.http.post(this.url,tienda)
  }
  setLista(listaNueva:Tienda[]){
    this.listacambio.next(listaNueva);
  }
  getLista(){
    return this.listacambio.asObservable();
  }
  modificar(tienda:Tienda){
    return this.http.put(this.url,tienda)
  }
  listarId(id:number){
    return this.http.get<Tienda>(`${this.url}/${id}`);
  }
  eliminar(id:number){
    return this.http.delete(this.url+"/"+id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean){
    this.confirmaEliminacion.next(estado)
  }
  buscar(texto:string){
    if(texto.length!=0){
      return this.http.post<Tienda[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
