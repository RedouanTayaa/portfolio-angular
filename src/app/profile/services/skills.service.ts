import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, mergeAll, toArray } from 'rxjs/operators';
import {Skills} from "../interfaces/skills.interface";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }

  getSkills(name?: string): Observable<Skills[]> {
    let skills = this.http.get<Skills[]>('assets/json/skills.json');

    if (name) {
      return skills.pipe(
        mergeAll(),
        filter(skill => skill.name === name),
        toArray()
      );
    }

    return skills;
  }
}
