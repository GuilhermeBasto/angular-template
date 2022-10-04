import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModalComponent } from './modal/modal.component';
import { TableComponent } from './table/table.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [InputComponent, ButtonComponent, DropdownComponent, ModalComponent, TableComponent],
  imports: [CommonModule, IconsModule],
  exports: [InputComponent, ButtonComponent, DropdownComponent, ModalComponent, TableComponent],
})
export class UiModule {}
