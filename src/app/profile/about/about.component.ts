import { Component, OnInit } from '@angular/core';
import {ContactService} from "../services/contact.service";
import {Observable} from "rxjs";
import {Contact} from "../interfaces/contact.interface";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  contact : Observable<Contact> = this.contactService.getContact();

  constructor(private contactService: ContactService) { }

  ngOnInit(): void { }

}
