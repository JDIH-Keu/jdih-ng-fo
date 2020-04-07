import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from './base-crud.service';
import { Scope } from '../models/scope';

import * as dummyData from './dummy-data.json';

@Injectable({
    providedIn: 'root'
})
export class ScopeService extends BaseCrudService {

    constructor(public http: HttpClient) {
        super();
    }

    getDefault(): Observable<Scope[]> {
        return of(dummyData.defaultScope);
    }

    getAll(): Observable<Scope[]> {
        const urlApi = 'api/PageMenu';
        return this.http.get<Scope[]>(urlApi);
    }
}
