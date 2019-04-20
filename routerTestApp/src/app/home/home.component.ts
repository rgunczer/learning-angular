import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  id;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('Home::ngOnInit...');

    this.route.params.subscribe((param: any) => {
      console.log(param);
      this.id = +param.id;
    });
  }

}
