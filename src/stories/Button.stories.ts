import { Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from 'src/app/shared/ui/button/button.component';

export default {
  title: 'Template/Button',
  component: ButtonComponent,
} as Meta;

export const primary = () => ({
  moduleMetadata: {
    declarations: [ButtonComponent],
  },
  template: `<app-button type="primary" >Primary</app-button>`,
});

export const secondary = () => ({
  moduleMetadata: {
    declarations: [ButtonComponent],
  },
  template: `<app-button type="secondary" >Secondary</app-button>`,
});

export const primaryDisabled = () => ({
  moduleMetadata: {
    declarations: [ButtonComponent],
  },
  template: `<app-button type="primary" disabled=true >Primary disabled</app-button>`,
});

export const secondaryDisabled = () => ({
  moduleMetadata: {
    declarations: [ButtonComponent],
  },
  template: `<app-button type="secondary" disabled=true >Secondary disabled</app-button>`,
});
