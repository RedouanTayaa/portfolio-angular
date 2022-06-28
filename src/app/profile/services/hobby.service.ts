import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, mergeAll, toArray } from 'rxjs/operators';
import {Hobby} from "../interfaces/hobby.interface";

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  constructor(private http: HttpClient) { }

  getHobbies(name?: string): Observable<Hobby[]> {
    let hobbies = this.http.get<Hobby[]>('assets/json/hobby.json');

    if (name) {
      return hobbies.pipe(
        mergeAll(),
        filter(hobby => hobby.hobby === name),
        toArray()
      );
    }

    return hobbies;
  }
}
