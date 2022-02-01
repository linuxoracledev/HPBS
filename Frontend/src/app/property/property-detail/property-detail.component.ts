import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  public paramId: number = 0;

  ngOnInit(): void {
    this.paramId = Number(this.route.snapshot.params['id'])
    this.route.params.subscribe(paramValue => {
      this.paramId = paramValue['id'];
    })
  }

  onClickNext() {
    this.paramId += 1
    this.router.navigate(['property-detail', this.paramId]);
  }

}
