import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-test',
  templateUrl: './carousel-test.component.html'
})
export class CarouselTestComponent implements OnInit {

  pictures = [
    {
      caption: 'image 1',
      source: 'https://via.placeholder.com/200x60.png?text=image-one'
    },
    {
      caption: 'image 2',
      source: 'https://via.placeholder.com/200x60.png?text=image-two'
    },
    {
      caption: 'image 3',
      source: 'https://via.placeholder.com/200x60.png?text=image-three'
    },
    {
      caption: 'image 4',
      source: 'https://via.placeholder.com/200x60.png?text=image-four'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
