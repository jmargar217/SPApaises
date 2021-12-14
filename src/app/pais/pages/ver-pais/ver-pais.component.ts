import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
import { PaisServiceService } from '../../services/pais-service.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Country;
  constructor(private rutaActiva: ActivatedRoute, private paisService:PaisServiceService) { }

  ngOnInit(): void {
    //this.rutaActiva.snapshot.params
    this.paisService.verPais(this.rutaActiva.snapshot.params['id']).subscribe(resp=>{
      this.pais = resp[0];
    });
  }

}
