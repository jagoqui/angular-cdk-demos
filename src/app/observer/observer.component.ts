import { Component } from '@angular/core';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.scss'],
})
export class ObserverComponent {
  isFirstShowed = true;

  toggleTemplate() {
    this.isFirstShowed = !this.isFirstShowed;
  }
}
