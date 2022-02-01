import { Component, Input, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent implements OnInit {
  constructor(private propertyService: PropertyService) { }
  @Input() properties: any;
  actUrl: string = "";
  ngOnInit(): void {
    this.actUrl = this.propertyService.getCurentUrl();
  }
}
