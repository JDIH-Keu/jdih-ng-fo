import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

export interface IbaseCrudService {
  urlApi: string;
  http: HttpClient;
  getAll(params: {}): Observable <any>;
  getById(id: string): Observable <any>;
  update(item: any, id: string): Observable <any>;
  delete(id: string): Observable <any>;
  create(item: any): Observable<any>;
}
