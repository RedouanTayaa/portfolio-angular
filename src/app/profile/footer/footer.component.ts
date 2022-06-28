import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Social} from "../interfaces/social.interface";
import {SocialService} from "../services/social.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  socials : Observable<Social[]> = this.socialService.getSocials();

  constructor(private socialService: SocialService) { }

  ngOnInit(): void {
  }

}
