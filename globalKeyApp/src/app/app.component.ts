import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li>
        <a routerLink="/home" href="">A-Component</a>
      </li>
    </ul>
    <input type="text">
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  private keysQueue = [];
  private triggerWord = 'BUG';

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!event.shiftKey) {
      return;
    }

    this.keysQueue.push(event.key.toUpperCase())
    if (this.keysQueue.length > this.triggerWord.length) {
      this.keysQueue.shift();
    }

    const word = this.keysQueue.join('');
    if (word === this.triggerWord) {
      console.log('show debug overlay');
    }
  }

}
