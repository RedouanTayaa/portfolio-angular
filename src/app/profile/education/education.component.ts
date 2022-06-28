import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Education} from "../interfaces/education.interface";
import {EducationService} from "../services/education.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educations : Observable<Education[]> = this.educationService.getEducations();

  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
  }

}
