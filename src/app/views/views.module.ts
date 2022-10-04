import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, ViewsRoutingModule, DashboardModule],
})
export class ViewsModule {}
