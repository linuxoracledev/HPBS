import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProperty } from '../property/property-list/property-list-interface';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private url = 'data/properties.json';
  constructor(private http: HttpClient, private actRoute: ActivatedRoute) { }

  getPropertyAll(): Observable<IProperty[]> {
    return this.http.get<IProperty[]>(this.url);
  }

  actUrl: string = "";
  getCurentUrl() {
    this.actUrl = this.actRoute.snapshot.url.toString();
    return this.actUrl;
  }
}
