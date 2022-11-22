import { Injectable } from '@angular/core';
import{HttpClient } from '@angular/common/http'
import { Cliente } from '../model/cliente';
import { EMPTY, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService { 
  url:string = "http://localhost:8080/clientes";
  private listacambio=new Subject<Cliente[]>()
  private confirmaEliminacion=new Subject<Boolean>()
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Cliente[]>(this.url);
  }
  insertar(cliente:Cliente){
    return this.http.post(this.url,cliente)
  }
  setLista(listaNueva:Cliente[]){
    this.listacambio.next(listaNueva);
  }
  getLista(){
    return this.listacambio.asObservable();
  }
  modificar(cliente:Cliente){
    return this.http.put(this.url,cliente);
  }
  listarId(id:number){
    return this.http.get<Cliente>(`${this.url}/${id}`);
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
      return this.http.post<Cliente[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}  
