import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseIconComponent } from './base-icon/base-icon.component';
import { EyeComponent } from './eye/eye.component';

@NgModule({
  declarations: [BaseIconComponent, EyeComponent],
  imports: [CommonModule],
  exports: [EyeComponent],
})
export class IconsModule {}
