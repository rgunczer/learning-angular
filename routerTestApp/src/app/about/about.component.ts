import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as _ from 'lodash';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  id: number;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.route.params.subscribe((param) => {
      const id: number = parseFloat(param['id']);
      if (!isNaN(id)) {
        console.log('id: ', id);
        this.id = id;
      }
    });

  }

  ngOnInit() {
    console.log('About::ngOnInit... id: [' + this.id + ']');

    const users = [
      {'user': 'barney'},
      {'user': 'fred'}
    ];

    const names = _.map(users, 'user');

    console.log('names: ', names);
  }

  again() {
    this.router.navigate(['about', 12]);
  }

}
