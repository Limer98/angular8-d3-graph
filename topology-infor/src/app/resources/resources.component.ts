import { Component, OnInit } from '@angular/core';
import {Resource} from '../resource';
import { RESOURCES} from '../mock-resources';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  resources = RESOURCES;
  constructor() { }

  ngOnInit() {
  }

}
