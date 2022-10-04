import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from './ui/ui.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, UiModule],
  exports: [CommonModule, UiModule, RouterModule, ReactiveFormsModule],
})
export class SharedModule {}
