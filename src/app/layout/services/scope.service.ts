import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from '../../shared/services/base-crud.service';
import { Scope } from '../models/scope';

import { defaultScope } from './dummy-data.js';

@Injectable({
    providedIn: 'root'
})
export class ScopeService extends BaseCrudService {

    constructor(public http: HttpClient) {
        super();
    }

    getDefault(): Observable<Scope[]> {
        return of(defaultScope);
    }

    getAll(): Observable<Scope[]> {
        const urlApi = 'api/PageMenu';
        return this.http.get<Scope[]>(urlApi);
    }
}
