import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from './base-crud.service';
import { RefPeradilan } from '../models/main/references';

import * as dummyData from './dummy-data.json';

@Injectable({
    providedIn: 'root'
})
export class BentukPeradilanService extends BaseCrudService {

    constructor(public http: HttpClient) {
        super();
        this.urlApi = 'api/PageMenu';
    }

    getDefault(): Observable<RefPeradilan[]> {
        return of([]);
    }

}
