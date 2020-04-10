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
        this.urlApi = 'api/Feedback';
    }

    getDefault(): Observable<Feedback[]> {
        return of(dummyData.FeedbackExample);
    }

}
