import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { IbaseCrudService } from './ibase-crud.service';
import { catchError, retry } from 'rxjs/operators';

export class BaseCrudService implements IbaseCrudService {
  public urlApi = '';
  http: HttpClient;
  constructor() {
  }

  getAll(params: { [key: string]: any } = {}): Observable<any[]> {
    return this.http.get<any>(this.urlApi, { params })
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllByPaging(params: { [key: string]: any } = {}): Observable<any> {
    return this.http.get<any>(this.urlApi, { params })
      .pipe(
        catchError(this.handleError)
      )
  }

  getById(id: string = ''): Observable<any> {
    return this.http.get<any>(this.urlApi + `/${id}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  getByIds(ids: string[], params: { [key: string]: any } = {}): Observable<any> {
    params = Object.assign(params, { ids })
    return this.http.get<any[]>(`${this.urlApi}/GetByIds`, { params })
      .pipe(
        catchError(this.handleError)
      )
  }

  update(item: any, id: string): Observable<any> {
    return this.http.put<any>(this.urlApi + `/${id}`, item)
      .pipe(
        catchError(this.handleError)
      )
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(this.urlApi + `/${id}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  create(item: any): Observable<any> {
    return this.http.post(this.urlApi, item)
      .pipe(
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 404) {

    }
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message)
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`)
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.')
  }
}
