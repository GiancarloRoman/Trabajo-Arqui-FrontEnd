import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tienda } from 'src/app/model/tienda';
import { TiendaService } from 'src/app/service/tienda.service';

@Component({
  selector: 'app-tienda-creaedita',
  templateUrl: './tienda-creaedita.component.html',
  styleUrls: ['./tienda-creaedita.component.css']
})
export class TiendaCreaeditaComponent implements OnInit {
  tienda:Tienda= new Tienda();
  mensaje:string="";
  edicion: boolean= false;
  id:number=0;
  constructor(private tiendaService:TiendaService,
    private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id'] !=null;
      this.init();
    })
    }

  aceptar():void{
    if(this.tienda.nombreTienda.length>0 && this.tienda.emailTienda.length>0 && this.tienda.direccionTienda.length>0){
      if(this.edicion){
      this.tiendaService.modificar(this.tienda).subscribe(data=>{
        this.tiendaService.listar().subscribe(data=>{
          this.tiendaService.setLista(data);
        })
      })
    }
    else{
      this.tiendaService.insertar(this.tienda).subscribe(data => {
        this.tiendaService.listar().subscribe(data => {
          this.tiendaService.setLista(data);
        })
      })
    }
      this.router.navigate(['tiendas']);
    } else{
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init(){
    if(this.edicion){
      this.tiendaService.listarId(this.id).subscribe(data=>{
        this.tienda=data;
      })
    }
  }


}
