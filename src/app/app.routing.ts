import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BudgetsComponent } from './components/budgets';
import { ViewServiceComponent } from './components/services-view';
import { InfoComponent } from './components/info';
import { ServicesComponent } from './components/services';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
    path: '',
    component: BudgetsComponent,
    children: [{
        path: '',
        component: InfoComponent,
        outlet: 'info'
      },
      {
        path: '',
        component: ServicesComponent,
        outlet: 'services'
      },
      {
        path: 'view',
        component: ViewServiceComponent,
        outlet: 'info'
      },
      {
        path: 'view',
        component: ViewServiceComponent,
        outlet: 'services'
      }

    ]
  },
    ])
  ],
  exports : [
    RouterModule
  ]
})
export class AppRouting {

}