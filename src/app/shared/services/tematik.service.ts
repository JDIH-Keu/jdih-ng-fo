import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from './base-crud.service';
import { Tematik } from '../models/tematik';

import * as dummyData from './dummy-data.json';

@Injectable({
    providedIn: 'root'
})
export class TematikService extends BaseCrudService {

    constructor(public http: HttpClient) {
        super();
    }

    getDefault(): Observable<Tematik[]> {
        return of(dummyData.defaultCategory);
    }

    getAll(): Observable<Tematik[]> {
        const urlApi = 'api/Tematik';
        return this.http.get<Tematik[]>(urlApi);
    }
}
