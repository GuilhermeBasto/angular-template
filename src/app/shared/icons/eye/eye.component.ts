import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-eye',
  templateUrl: './eye.component.html',
  styleUrls: ['./eye.component.scss'],
})
export class EyeComponent {
  @Output() clickIcon = new EventEmitter<null>();

  constructor() {}

  onClick() {
    this.clickIcon.emit();
  }
}
