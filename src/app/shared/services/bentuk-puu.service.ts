import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from './base-crud.service';
import { RefBentuk } from '../models/main/references';

import * as dummyData from './dummy-data.json';

@Injectable({
    providedIn: 'root'
})
export class BentukPUUService extends BaseCrudService {

    constructor(public http: HttpClient) {
        super();
        this.urlApi = 'api/bentukpuu';
    }

    getDefault(): Observable<RefBentuk[]> {
        return of(dummyData.defaultBentuk);
    }

}
