import { Injectable } from '@angular/core';
import{HttpClient } from '@angular/common/http'
import { Marca } from '../model/marca';
import { EMPTY, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  url:string= "http://localhost:8080/marcas";
  private listacambio=new Subject<Marca[]>()
  private confirmaEliminacion= new Subject<Boolean>()
  
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Marca[]>(this.url);
  }
  insertar(marca:Marca){
    return this.http.post(this.url,marca);
  }
  setLista(listaNueva:Marca[]){
    this.listacambio.next(listaNueva);
  }
  getLista(){
    return this.listacambio.asObservable();
  }
  modifcar(marca:Marca){
    return this.http.put(this.url,marca);
  }
  listarId(id:number){
    return this.http.get<Marca>(`${this.url}/${id}`);
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
      return this.http.post<Marca[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
