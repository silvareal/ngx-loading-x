import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public load: boolean;
  title = 'ng-loading-library';

  constructor() {}

  ngOnInit() {
    this.load = true;

    setTimeout(() => this.load = false, 5000 )
  }
}
