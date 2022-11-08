import { Injectable } from '@angular/core';
import{HttpClient } from '@angular/common/http'
import { Talla } from '../model/talla';
import { EMPTY, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TallaService {
  url:string= "http://localhost:8080/tallas";
  private confirmaEliminacion=new Subject<Boolean>()
  private listacambio= new Subject<Talla[]>()
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Talla[]>(this.url);
  }
  insertar(talla:Talla){
    return this.http.post(this.url,talla);
  }
  setLista(listaNueva:Talla[]){
    this.listacambio.next(listaNueva);
  }
  getLista(){
    return this.listacambio.asObservable();
  }
  modificar(talla:Talla){
    return this.http.put(this.url,talla)
  }
  listarId(id:number){
    return this.http.get<Talla>(`${this.url}/${id}`);
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
      return this.http.post<Talla[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
