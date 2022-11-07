car(comprobante:Comprobante_Pago){
    return this.http.put(this.url,comprobante);
  }
  listarId(id:number){
    return this.http.get<Comprobante_Pago>(`${this.url}/${id}`);
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
      return this.http.post<Comprobante_Pago[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
