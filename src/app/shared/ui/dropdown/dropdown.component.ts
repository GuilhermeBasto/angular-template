import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

import { DropdownOption } from './dropdown-option';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements ControlValueAccessor {
  @Input() options: Array<DropdownOption> = [];
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() label: string = '';

  public value: string = '';

  get formControl(): NgControl {
    return this.ngControl;
  }

  constructor(
    // Retrieve the dependency only from the local injector,
    // not from parent or ancestors.
    @Self()
    // We want to be able to use the component without a form,
    // so we mark the dependency as optional.
    @Optional()
    private ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  /**
   * Write form value to the DOM element (model => view)
   */
  writeValue(value: string): void {
    this.value = value;
  }

  /**
   * Write form disabled state to the DOM element (model => view)
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /**
   * Update form when DOM element value changes (view => model)
   */
  registerOnChange(fn: () => void): void {
    // Store the provided function as an internal method.
    this.onChange = fn;
  }

  /**
   * Update form when DOM element is blurred (view => model)
   */
  registerOnTouched(fn: () => void): void {
    // Store the provided function as an internal method.
    this.onTouched = fn;
  }

  onChangeSafe(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.onChange(value);
  }

  onChange(event: unknown): void {}

  onTouched(): void {}
}
