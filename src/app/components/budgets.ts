import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budgets',
  template: `
  <div class="budgets">
  <div class="info">
    <router-outlet name="info"></router-outlet>
  </div>

  <div class="services">
    <router-outlet name="services"></router-outlet>
  </div>
</div>
` ,
  styles: [`
    .budgets {
      width: 600px;
      height: 500px;
      border-radius: 20px;
      background-color: black;
      padding-top: 20px;
      margin: auto;
    }
    
    .info {
        width: 500px;
        height: 200px;
        background-color: red;
        border-radius: 20px;
        margin: auto;
        margin-top: 20px;
    }

    .services{
        width: 500px;
        margin: auto;
        margin-top: 40px;
        height: 200px;
        background-color: green;
        border-radius: 20px;
    }
}
  `]
})
export class BudgetsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
