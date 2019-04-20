import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-mouse-track-anim',
  templateUrl: './mouse-track-anim.component.html'
})
export class MouseTrackAnimComponent implements OnInit {

  @ViewChild('ball1') ballElement1: ElementRef;
  @ViewChild('ball2') ballElement2: ElementRef;
  @ViewChild('ball3') ballElement3: ElementRef;
  @ViewChild('ball4') ballElement4: ElementRef;
  @ViewChild('ball5') ballElement5: ElementRef;
  @ViewChild('ball6') ballElement6: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // const el = document.createElement('div');
    // el.id = 'ball1';
    // el.className = 'ball';
    // document.body.appendChild(el);
  }

  @HostListener('document:mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    // const balls = [];
    // balls[0] = document.getElementById('ball1');
    // console.log(balls[0]);
    const balls = [
      this.ballElement1, this.ballElement2, this.ballElement3,
      this.ballElement4, this.ballElement5, this.ballElement6
    ];
    const times = [10, 100, 200, 300, 400, 500];
    for(let i = 0; i < times.length; ++i) {
      times[i] = Math.floor(times[i] * 0.75);
    }

    for (let i = 0; i < balls.length; ++i) {
      setTimeout(() => {
        balls[i].nativeElement.style.left = event.clientX + 20 + 'px';
        balls[i].nativeElement.style.top = event.clientY + 30 + 'px';
      }, times[i]);
    }
  }

}
