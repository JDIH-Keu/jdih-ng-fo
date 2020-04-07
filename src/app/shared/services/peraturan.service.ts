import { Injectable } from '@angular/core';
import { BaseCrudService } from './base-crud.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import * as dummyData from './dummy-data.json';
import { Peraturan } from '../models/peraturan';

@Injectable({
    providedIn: 'root'
})
export class PeraturanService extends BaseCrudService {

    constructor(public http: HttpClient, public router: Router) {
        super();
        this.urlApi = 'api/AppPeraturans';
    }

    getExample(): Observable<Peraturan[]> {
        return of(dummyData.examplePeraturan);
    }

    public getByUrl(url: string): Observable<any> {
        return this.http.get<any>(`${this.urlApi}/ByUrl/${url}`)
    }


}
