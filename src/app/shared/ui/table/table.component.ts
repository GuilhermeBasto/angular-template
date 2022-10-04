import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Column } from './column';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> {
  @Input() tableColumns: Array<Column> = [];
  @Input() tableData: Array<T> = [];
  @Input() showDetails: boolean = false;
  @Output() details = new EventEmitter<T>();

  constructor() {}

  onClick(col: T) {
    this.details.emit(col);
  }
}
