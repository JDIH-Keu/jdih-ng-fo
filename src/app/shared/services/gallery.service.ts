import { HttpClient } from '@angular/common/http'
import { BaseCrudService } from './../../../shared/services/base-crud.service'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { PageWidget } from '../../widget/models/page-widget'
import { Album } from '../models/album'

@Injectable({
  providedIn: 'root'
})
export class GalleryService extends BaseCrudService {
  constructor(public http: HttpClient) {
    super()
    this.urlApi = 'api/Albums'
  }

  public getByAlbum(id: number, params = {}): Observable<any> {
    return this.http.get<any>(this.urlApi + `/${id}`, { params: params })
  }

}


