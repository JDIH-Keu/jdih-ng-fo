import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from '../../shared/services/base-crud.service';
import { PageMenu } from '../models/pages/page-menu';

import * as dummyData from './dummy-data.json';

@Injectable({
    providedIn: 'root'
})
export class PageMenuService extends BaseCrudService {

    constructor(public http: HttpClient) {
        super();
        this.urlApi = 'api/PageMenu';
    }

    getDefault(): Observable<PageMenu[]> {
        return of(dummyData.defaultMenu);
    }
}
