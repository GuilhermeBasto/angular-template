import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Meta } from '@storybook/angular';
import { InputComponent } from 'src/app/shared/ui/input/input.component';

export default {
  title: 'Template/Input',
  component: InputComponent,
} as Meta;

const formGroup = new FormGroup({
  text: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  number: new FormControl(null, Validators.required),
});

export const inputText = () => ({
  moduleMetadata: {
    declarations: [InputComponent],
    imports: [ReactiveFormsModule, BrowserModule],
  },
  template: ` <form [formGroup]="formGroup">
                <app-input placeholder="insert text here!" label="text label" formControlName="text">
                <span error="required">The text is required.</span>
                </app-input>
              </form>`,
  props: { formGroup },
});

export const inputEmail = () => ({
  moduleMetadata: {
    declarations: [InputComponent],
    imports: [ReactiveFormsModule, BrowserModule],
  },
  template: ` <form [formGroup]="formGroup">
                <app-input placeholder="insert email here!" label="email label" type="email" formControlName="email">
                <span error="required">The email is required.</span>
                <span error="email">The email is invalid.</span>
                </app-input>
              </form>`,
  props: { formGroup },
});

export const inputNumber = () => ({
  moduleMetadata: {
    declarations: [InputComponent],
    imports: [ReactiveFormsModule, BrowserModule],
  },
  template: ` <form [formGroup]="formGroup">
                <app-input placeholder="insert numbers here!" label="number label" type="number" formControlName="number">
                <span error="required">The number is required.</span>
                </app-input>
              </form>`,
  props: { formGroup },
});

export const inputPassword = () => ({
  moduleMetadata: {
    declarations: [InputComponent],
    imports: [ReactiveFormsModule, BrowserModule],
  },
  template: ` <form [formGroup]="formGroup">
                <app-input placeholder="insert password here!" label="password label" type="password" formControlName="text">
                <span error="required">The password is required.</span>
                </app-input>
              </form>`,
  props: { formGroup },
});

export const inputDisabled = () => ({
  moduleMetadata: {
    declarations: [InputComponent],
    imports: [ReactiveFormsModule, BrowserModule],
  },
  template: ` <form [formGroup]="formGroup">
                  <app-input placeholder="insert text here!" label="text label"  formControlName="text" disabled="true">
                  </app-input>
                </form>`,
  props: { formGroup },
});
