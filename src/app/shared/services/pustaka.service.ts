import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from './base-crud.service';
import { Pustaka } from '../models/pustaka';

import * as sampleData from './sampledataperpus.json';

@Injectable({
    providedIn: 'root'
})
export class PustakaService extends BaseCrudService {

    constructor(public http: HttpClient) {
        super();
        this.urlApi = 'api/Pustaka';
    }

    getDefault(): Observable<Pustaka[]> {
        return of(sampleData.PerpustakaanData);
    }

}
