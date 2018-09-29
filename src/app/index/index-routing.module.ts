import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { RealTimeComponent } from './real-time/real-time.component';
import { MonitoringComponent } from './monitoring/monitoring.component';


const routes: Routes = [
  {
    path: 'monitoring',
    component: IndexComponent,
  },
  {
    path: 'welcome',
    component: RealTimeComponent,
  },
  {
    path: 'test',
    component: MonitoringComponent,
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: '**',
    component: RealTimeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {
}
