import { Injectable } from '@angular/core';
import { BaseCrudService } from './base-crud.service';

@Injectable({
  providedIn: 'root'
})
export class MonografiHukumService extends BaseCrudService {

  constructor() { 
    super();
    this.urlApi = 'api/AppMonografis';
  }
}
