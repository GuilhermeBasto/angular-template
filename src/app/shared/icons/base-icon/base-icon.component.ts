import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-icon',
  templateUrl: './base-icon.component.html',
  styleUrls: ['./base-icon.component.scss'],
})
export class BaseIconComponent {
  @Input() path = '';

  constructor() {}
}
