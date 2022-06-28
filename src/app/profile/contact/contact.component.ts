import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from "../services/contact.service";
import {Observable} from "rxjs";
import {Contact} from "../interfaces/contact.interface";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact : Observable<Contact> = this.contactService.getContact();

  FormData = this.builder.group({
    Name: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Message: new FormControl('', [Validators.required])
  });

  formState = '';
  loading = false;

  constructor(private builder: FormBuilder, private contactService: ContactService) { }

  ngOnInit(): void {

  }

  onSubmit(FormData: FormGroup) {
    let self = this;
    self.loading = true;
    this.contactService.postMessage(FormData)
      .then(function () {
        self.FormData.reset()
        self.formState = 'success';
        self.loading = false;
        console.log('message send');
      }, function (error) {
        self.formState = 'error';
        self.loading = false;
        console.log('message error', error);
      });
  }

}
