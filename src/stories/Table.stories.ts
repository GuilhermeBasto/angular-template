import { Meta } from '@storybook/angular';
import { EyeComponent } from 'src/app/shared/icons/eye/eye.component';
import { Column } from 'src/app/shared/ui/table/column';
import { TableComponent } from 'src/app/shared/ui/table/table.component';

export default {
  title: 'Template/Table',
  component: TableComponent,
} as Meta;

const tableColumns: Array<Column> = [
  { columnDef: 'id', header: 'ID', cell: (element: Record<string, any>) => `${element['id']}` },
  { columnDef: 'name', header: 'Name', cell: (element: Record<string, any>) => `${element['name']}` },
];

const tableData = [
  { id: 'id-1', name: 'Movies' },
  { id: 'id-2', name: 'Music' },
];

export const table = () => ({
  moduleMetadata: {
    declarations: [TableComponent, EyeComponent],
    imports: [],
  },
  template: ` <app-table [tableColumns]="tableColumns" [tableData]="tableData" [showDetails]="true"></app-table>`,
  props: { tableColumns, tableData },
});

export const emptyTable = () => ({
  moduleMetadata: {
    declarations: [TableComponent],
    imports: [],
  },
  template: ` <app-table [tableColumns]="tableColumns" [tableData]="[]"></app-table>`,
  props: { tableColumns },
});
