import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{
  ngOnInit(): void {
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(valor=>{
      this.onDebounce.emit(valor);
    })
  }

  @Output() onEnter:EventEmitter<string> = new EventEmitter();
  @Output() onDebounce:EventEmitter<string> = new EventEmitter();

  @Input() placeholder:string = '';

  debounce: Subject<string> = new Subject<string>();
  termino:string = '';

  teclaPresionada(){
    this.debounce.next(this.termino);
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }
}
