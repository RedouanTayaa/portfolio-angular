import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, mergeAll, toArray } from 'rxjs/operators';
import {Work} from "../interfaces/work.interface";

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(private http: HttpClient) { }

  getWorks(company?: string): Observable<Work[]> {
    let works = this.http.get<Work[]>('assets/json/work.json');

    if (company) {
      return works.pipe(
        mergeAll(),
        filter(work => work.company === company),
        toArray()
      );
    }

    return works;
  }
}
