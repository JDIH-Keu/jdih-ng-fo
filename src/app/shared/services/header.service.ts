import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from './base-crud.service';

@Injectable({
    providedIn: 'root'
})
export class HeaderService extends BaseCrudService {
    private subject: Subject<string>;

    constructor(public http: HttpClient) {
        super();
        this.subject = new Subject();
        this.subject.next('sliderx-cpns.jpg');
    }

    getImage(): Subject<string> {
        return this.subject;
    }

    updateImage(name: string): void {
        this.subject.next(name);
    }
}
