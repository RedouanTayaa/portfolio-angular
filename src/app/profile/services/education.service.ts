import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, mergeAll, toArray } from 'rxjs/operators';
import {Education} from "../interfaces/education.interface";

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient) { }

  getEducations(title?: string): Observable<Education[]> {
    let educations = this.http.get<Education[]>('assets/json/education.json');

    if (title) {
      return educations.pipe(
        mergeAll(),
        filter(education => education.title === title),
        toArray()
      );
    }

    return educations;
  }
}
