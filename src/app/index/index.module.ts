import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ThemeModule } from '../@theme/theme.module';
import { GaugeComponent } from './gauge/gauge.component';
import { NbChatModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { BarComponent } from './bar/bar.component';
import { KpiBarComponent } from './kpi-bar/kpi-bar.component';
import { ElectryPieComponent } from './electry-pie/electry-pie.component';
import { WarnChatComponent } from './warn-chat/warn-chat.component';
import { RealTimeComponent } from './real-time/real-time.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { InfiniteListModule } from 'angular-infinite-list';
import { MapComponent } from './map/map.component';


@NgModule({
  imports: [
      IndexRoutingModule,
      ThemeModule,
      NgxEchartsModule,
      NbChatModule,
      InfiniteListModule,
      LeafletModule,
  ],
  declarations: [
    IndexComponent,
    DashboardComponent,
    GaugeComponent,
    BarComponent,
    KpiBarComponent,
    ElectryPieComponent,
    WarnChatComponent,
    RealTimeComponent,
    MapComponent,
  ],
})
export class IndexModule {
}