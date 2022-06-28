import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Work} from "../interfaces/work.interface";
import {WorkService} from "../services/work.service";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  works : Observable<Work[]> = this.workService.getWorks();

  constructor(private workService: WorkService) { }

  ngOnInit(): void {
  }

}
