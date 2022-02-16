import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['eu','efta','caricom','pa','au','usan','eeu','al','asean','cais','cefta','nafta','saarc']

  regionActiva: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  activarRegion(region:string){
    this.regionActiva = region;
  }

}
