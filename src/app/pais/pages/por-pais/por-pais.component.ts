import { Component, OnInit } from '@angular/core';
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

  constructor( private paisService:PaisService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.hayError = false;

    this.paisService.buscarPais(this.termino)
    .subscribe((resp) => {
        this.hayError = (resp.status == 404)?true:false;
        console.log(resp)
      },(error) => {
        this.hayError = true;
        console.error(error)
      });
  }

}
