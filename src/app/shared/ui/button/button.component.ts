import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() large: boolean = false;

  @Input() set loading(loading: boolean) {
    this._loading = loading;
  }

  get loading() {
    return this._loading;
  }

  private _loading = false;

  @Output() public clicked: EventEmitter<MouseEvent> = new EventEmitter();

  constructor() {}

  handleClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}
