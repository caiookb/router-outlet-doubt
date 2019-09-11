import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  template: `
  <h1>
  info component
</h1>

  `,
  styles: [
    `
    h1 {
      text-align: center;
    }
    `
  ]
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
