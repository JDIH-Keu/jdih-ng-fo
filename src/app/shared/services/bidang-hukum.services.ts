import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from './base-crud.service';
import { RefPeradilan } from '../models/main/references';

@Injectable({
    providedIn: 'root'
})
export class BidangHukumService extends BaseCrudService {

    constructor(public http: HttpClient) {
        super();
        this.urlApi = 'api/bidanghukum';
    }

    getDefault(): Observable<RefPeradilan[]> {
        return of([]);
    }

}
