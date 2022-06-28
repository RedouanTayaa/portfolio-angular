import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, mergeAll, toArray } from 'rxjs/operators';
import {Social} from "../interfaces/social.interface";

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(private http: HttpClient) { }

  getSocials(name?: string): Observable<Social[]> {
    let socials = this.http.get<Social[]>('assets/json/social.json');

    if (name) {
      return socials.pipe(
        mergeAll(),
        filter(social => social.name === name),
        toArray()
      );
    }

    return socials;
  }
}
