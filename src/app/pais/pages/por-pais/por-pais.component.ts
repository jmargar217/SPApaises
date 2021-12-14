import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisServiceService } from '../../services/pais-service.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {
  paises: Country[]=[];
  isError:boolean = false;

  constructor(private paisService:PaisServiceService) { }
  termino: string='';
  ngOnInit(): void {
  }
  buscar ( termino:string){
    this.termino=termino;
    this.paisService.buscarPais( this.termino)
    .subscribe( (resp) =>{
      this.isError=false;
      this.paises = resp;
    },
      (err) =>{
        this.isError=true;
      }
    )
  }
}
