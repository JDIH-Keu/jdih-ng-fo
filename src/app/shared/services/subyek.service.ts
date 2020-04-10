import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from './base-crud.service';
import { RefSubyek } from '../models/main/references';

import * as dummyData from './dummy-data.json';

@Injectable({
    providedIn: 'root'
})
export class SubyekService extends BaseCrudService {

    constructor(public http: HttpClient) {
        super();
        this.urlApi = 'api/Subyek';
    }

    getDefault(query): Observable<RefSubyek[]> {
        return of(dummyData.subyekExample.filter(item => item.RefSubjectNames.indexOf(query) > -1));
    }

}
