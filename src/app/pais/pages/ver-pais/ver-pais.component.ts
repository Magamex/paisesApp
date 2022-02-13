import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap((param)=>this.paisService.buscarPorCodigo(param.id)))
      .subscribe(resp=>{
        console.log(resp);
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
