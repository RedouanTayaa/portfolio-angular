import { Component, OnInit } from '@angular/core';
import{ init } from '@emailjs/browser';
import { environment } from '../../environments/environment';

init(environment.emailjs.init);

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
