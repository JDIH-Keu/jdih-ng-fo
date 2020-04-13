import { Injectable } from '@angular/core';
import { BaseCrudService } from './base-crud.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PutusanService extends BaseCrudService {

  constructor() {
    super();
    this.urlApi = 'api/AppPutusans';
   }

   public getByUrl(url: string): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/ByUrl/${url}`)
}
}
