import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  get httpParams(){
    return new HttpParams()
                  .set('fields', 'name,capital,population,alpha2Code,flag');
  }

  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarPorCodigo(termino:string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${termino}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/regionalbloc/${termino}`;
    return this.http.get<Country[]>(url,{ params: this.httpParams })
  }
}
