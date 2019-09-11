import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
template: `
<div class="container">
  <div class="serv">
      <h1>Services</h1>
      <button [routerLink]="[{ outlets: { primary: { services: ['view'] }}}]"> Go to services view</button>
  </div>
</div>
`,
  styles: [`
  .serv{
    margin: 50px auto;
    width: fit-content;
}`
  ]
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
