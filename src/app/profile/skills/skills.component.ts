import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Skills} from "../interfaces/skills.interface";
import {SkillsService} from "../services/skills.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills : Observable<Skills[]> = this.skillService.getSkills();

  constructor(private skillService: SkillsService) { }

  ngOnInit(): void {
  }

}
