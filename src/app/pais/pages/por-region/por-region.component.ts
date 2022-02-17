import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['eu','efta','caricom','pa','au','usan','eeu','al','asean','cais','cefta','nafta','saarc']

  regionActiva: string = '';

  paises:Country[] = [];

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  activarRegion(region:string){
    this.regionActiva = region;

    this.paisService.buscarRegion(region).subscribe((resp) => {
          this.paises = resp;
      });
  }

  // getClaseCSS(region:string){
  //   return (region === this.regionActiva)?'button is-primary':'button';
  // }

}
