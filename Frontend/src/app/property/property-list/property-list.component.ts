import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';
import { IProperty } from './property-list-interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  constructor(private service: PropertyService) {}

  properties: Array<any> = [];

  ngOnInit(): void {
    this.service.getPropertyAll().subscribe((data) => (this.properties = data));
  }
}
