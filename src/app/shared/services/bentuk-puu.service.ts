import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from './base-crud.service';
import { BentukPUU } from '../models/bentuk-puu';

import * as dummyData from './dummy-data.json';

@Injectable({
    providedIn: 'root'
})
export class BentukPUUService extends BaseCrudService {

    constructor(public http: HttpClient) {
        super();
    }

    getDefault(): Observable<BentukPUU[]> {
        return of(dummyData.defaultBentuk);
    }

    getAll(): Observable<BentukPUU[]> {
        const urlApi = 'api/PageMenu';
        return this.http.get<BentukPUU[]>(urlApi);
    }
}
