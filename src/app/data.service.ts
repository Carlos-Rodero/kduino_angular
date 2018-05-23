import { Injectable } from '@angular/core';
import { Data } from './data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { DATAS } from './mock-datas';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class DataService {

  private natusferaUrl_observations = '/observations.json';  // URL to web api
  private natusferaUrl_id_observations = '/observations';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  /** GET data from the server */
  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.natusferaUrl_observations)
      .pipe(
        catchError(this.handleError('getData', []))
      );
  }

  /** GET data by id. Will 404 if id not found */
  getDataUnique(id: number): Observable<Data> {
    const url = `${this.natusferaUrl_id_observations}/${id}.json`;
    // TODO: send the message _after_ fetching the hero
    return this.http.get<Data>(url).pipe(
      catchError(this.handleError<Data>(`getDataUnique id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchData(term: string): Observable<Data[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Data[]>(`${this.natusferaUrl_observations}?taxon_name=${term}`).pipe(
      catchError(this.handleError<Data[]>('searchData', []))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
