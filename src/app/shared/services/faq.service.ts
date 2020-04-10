import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from './base-crud.service';
import { FAQ } from '../models/faq';

import * as dummyData from './dummy-data.json';

@Injectable({
    providedIn: 'root'
})
export class FAQService extends BaseCrudService {

    constructor(public http: HttpClient) {
        super();
        this.urlApi = 'api/FAQ';
    }

    getDefault(): Observable<any[]> {
        return of(dummyData.FAQExample);
    }

}
