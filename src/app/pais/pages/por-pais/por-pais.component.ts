import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService:PaisService) { }

  ngOnInit(): void {
  }

  sugerencias(termino:string){
    this.hayError = false;
  }

  buscar(termino:string){
    this.termino = termino;
    this.hayError = false;

    this.paisService.buscarPais(this.termino)
    .subscribe((resp) => {
        if(resp instanceof Array === false){
          this.hayError=true;
          this.paises = [];
        }else{
          this.paises = resp;
        }

      },(error) => {
        this.hayError = true;
        this.paises = [];
        console.error(error)
      });
  }

}
