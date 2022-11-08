import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Talla } from 'src/app/model/talla';
import { TallaService } from 'src/app/service/talla.service';

@Component({
  selector: 'app-talla-creaedita',
  templateUrl: './talla-creaedita.component.html',
  styleUrls: ['./talla-creaedita.component.css']
})
export class TallaCreaeditaComponent implements OnInit {
  talla: Talla = new Talla();
  mensaje:string= "";
  edicion: boolean=false;
  id:number=0;
  constructor(private tallaService:TallaService,private router:Router,private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id'] !=null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.talla.letraTalla.length > 0) {
      if(this.edicion){
      this.tallaService.modificar(this.talla).subscribe(data =>{
        this.tallaService.listar().subscribe(data=>{
          this.tallaService.setLista(data);
        })
      })
    }
    else{
      this.tallaService.insertar(this.talla).subscribe(data=>{
        this.tallaService.listar().subscribe(data=>{
          this.tallaService.setLista(data);
        })
      })
    }
      this.router.navigate(['tallas']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init(){
    if(this.edicion){
      this.tallaService.listarId(this.id).subscribe(data=>{
        this.talla=data;
      })
    }
  }
}
