import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  results: Object
  searchTerm = new Subject<string>()

  constructor(private appService: AppService) {
    this.appService.search(this.searchTerm)
    .subscribe(results => {
      this.results = results.data
    })
  }
}

