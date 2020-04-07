import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from './base-crud.service';
import { Feedback } from '../models/feedback';

import * as dummyData from './dummy-data.json';

@Injectable({
    providedIn: 'root'
})
export class FeedbackService extends BaseCrudService {

    constructor(public http: HttpClient) {
        super();
    }

    getDefault(): Observable<Feedback[]> {
        return of(dummyData.FeedbackExample);
    }

    getAll(): Observable<Feedback[]> {
        const urlApi = 'api/Feedback';
        return this.http.get<any[]>(urlApi);
    }
}
