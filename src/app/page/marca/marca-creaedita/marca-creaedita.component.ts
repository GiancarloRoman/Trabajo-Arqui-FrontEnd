import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Marca } from 'src/app/model/marca';
import { MarcaService } from 'src/app/service/marca.service';

@Component({
  selector: 'app-marca-creaedita',
  templateUrl: './marca-creaedita.component.html',
  styleUrls: ['./marca-creaedita.component.css']
})
export class MarcaCreaeditaComponent implements OnInit {

  marca:Marca= new Marca();
  mensaje:string="";
  edicion:boolean=false;
  id:number=0;
  constructor(private marcaService:MarcaService,
    private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id'] !=null;
      this.init();
    })
  }
  aceptar(): void{
    if(this.marca.nombreMarca.length>0){
      if(this.edicion){
      this.marcaService.modifcar(this.marca).subscribe(data=>{
        this.marcaService.listar().subscribe(data=>{
          this.marcaService.setLista(data);
        })
      })
    }
    else{
      this.marcaService.insertar(this.marca).subscribe(data=>{
        this.marcaService.listar().subscribe(data=>{
          this.marcaService.setLista(data);
        })
      })
    }
      this.router.navigate(['marcas']);
    } else{
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init(){
    if(this.edicion){
      this.marcaService.listarId(this.id).subscribe(data=>{
        this.marca=data;
      })
    }
  }
}
