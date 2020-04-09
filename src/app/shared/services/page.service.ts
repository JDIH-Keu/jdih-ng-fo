import { HttpClient } from '@angular/common/http'
import { BaseCrudService } from './../../../shared/services/base-crud.service'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { PageWidget } from '../../widget/models/page-widget'
import { Page } from '../models/pages/page'
import { PaginationResult } from '../../../shared/pagination/pagination';

@Injectable({
  providedIn: 'root'
})
export class PageService extends BaseCrudService {

  constructor(
    public http: HttpClient
  ) {
    super()
    this.urlApi = 'api/Pages'
  }

  getWidget(pageId: number): Observable<any> {
    return this.http.get<PageWidget[]>(`${this.urlApi}/${pageId}/PageWidget`)
  }

  getByUrl(url: string): Observable<Page> {
    return this.http.get<Page>(`${this.urlApi}/ByUrl/${url}`)
  }

  getByKeyValue(keyValue: string): Observable<Page> {
    return this.http.get<Page>(`${this.urlApi}/GetByKeyValue/${keyValue}`)
  }


  generalSearch(params: any): Observable<PaginationResult> {
    return this.http.get<PaginationResult>(`${this.urlApi}/GeneralSearch`, { params: params })
  }


}
