import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Meta } from '@storybook/angular';
import { DropdownOption } from 'src/app/shared/ui/dropdown/dropdown-option';
import { DropdownComponent } from 'src/app/shared/ui/dropdown/dropdown.component';

export default {
  title: 'Template/Dropdown',
  component: DropdownComponent,
} as Meta;

const formGroup = new FormGroup({
  value: new FormControl('', Validators.required),
});

const options: Array<DropdownOption> = [
  { label: 'one', value: '1' },
  { label: 'two', value: '2' },
];

export const dropdown = () => ({
  moduleMetadata: {
    declarations: [DropdownComponent],
    imports: [ReactiveFormsModule, BrowserModule],
  },
  template: ` <form [formGroup]="formGroup">
                <app-dropdown placeholder="Select option" label="Dropdown label" formControlName="value" [options]="options">
                <span error="required">The text is required.</span>
                </app-dropdown>
              </form>`,
  props: { formGroup, options },
});

export const disabledDropdown = () => ({
  moduleMetadata: {
    declarations: [DropdownComponent],
    imports: [ReactiveFormsModule, BrowserModule],
  },
  template: ` <form [formGroup]="formGroup">
                <app-dropdown [disabled]="true" placeholder="Select option" label="Dropdown label" formControlName="value" [options]="options">
                <span error="required">The text is required.</span>
                </app-dropdown>
              </form>`,
  props: { formGroup, options },
});
