import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Contact} from "../interfaces/contact.interface";
import {send} from "@emailjs/browser";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContact() {
    return this.http.get<Contact>('assets/json/contact.json');
  }

  postMessage(input: any) {
    return send(environment.emailjs.service, environment.emailjs.template, {'name': input.Name, 'message': input.Message, 'email': input.Email})
      .then(function (response) {
        console.log('response', response);
        return response;
      }, function (error) {
        return error;
    })
  }
}
