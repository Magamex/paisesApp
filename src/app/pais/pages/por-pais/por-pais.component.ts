import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: []
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];

  constructor( private paisService:PaisService) { }

  ngOnInit(): void {
  }

  sugerencias(termino:string){
    this.hayError = false;
    this.termino = termino;

    if(termino.length > 0){
      this.paisService.buscarPais(termino)
        .subscribe(paises => {
          this.paisesSugeridos = paises.splice(0,5)
        },(error) => {
          this.paisesSugeridos = [];
        });
    }else{
      this.paisesSugeridos = [];
    }
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
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
          this.paisesSugeridos = [];
        }

      },(error) => {
        this.hayError = true;
        this.paises = [];
        console.error(error)
      });
  }

}
