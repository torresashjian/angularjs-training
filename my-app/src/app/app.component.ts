import { Component } from '@angular/core';
import { DgraphService } from './dgraph.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  clickMessage = '';

  constructor(private dgraphService: DgraphService){

  }

  onClickMe() {
    this.clickMessage = 'You are my hero!';
    // Also logging
    this.dgraphService.log("Logging something here")
  }
}
