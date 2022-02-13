import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((param)=>this.paisService.buscarPorCodigo(param.id)),
        tap(console.log)
        )
      .subscribe(pais=>{
        this.pais = pais;
      })

    // this.activatedRoute.params
    //   .subscribe(params => {
    //     this.paisService.buscarPorCodigo(params.id)
    //     .subscribe(pais => {
    //       console.log(pais);
    //     })
    //   })
  }

}
