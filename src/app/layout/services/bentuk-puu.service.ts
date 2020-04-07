import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from '../../shared/services/base-crud.service';
import { BentukPUU } from '../models/bentuk-puu';

import { defaultBentuk } from './dummy-data.js';

@Injectable({
    providedIn: 'root'
})
export class BentukPUUService extends BaseCrudService {

    constructor(public http: HttpClient) {
        super();
    }

    getDefault(): Observable<BentukPUU[]> {
        return of(defaultBentuk);
    }

    getAll(): Observable<BentukPUU[]> {
        const urlApi = 'api/PageMenu';
        return this.http.get<BentukPUU[]>(urlApi);
    }
}
