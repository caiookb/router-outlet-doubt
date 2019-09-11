import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BudgetsComponent } from './components/budgets';
import { ViewServiceComponent } from './components/services-view';
import { InfoComponent } from './components/info';
import { ServicesComponent } from './components/services';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting
    ],
  declarations: [ 
    AppComponent,
    HelloComponent,
    BudgetsComponent,
    ViewServiceComponent,
    ServicesComponent,
    InfoComponent 
    ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
