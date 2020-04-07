import { Injectable } from '@angular/core';
import { BaseCrudService } from '../../../shared/services/base-crud.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtikelHukumService extends BaseCrudService {

  constructor(public http: HttpClient, public router: Router) {
    super()
    this.urlApi = 'api/AppArtikels';
  }

  public getByUrl(url: string): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/ByUrl/${url}`)
  }


}
