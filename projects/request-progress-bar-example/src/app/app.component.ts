import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-mypackage';
  url = 'https://api.publicapis.org/entries';
  count = 0;

  constructor( private http: HttpClient) {
  }
// via http request to server side
  downloadGoogleHtmlFile() {
    this.http.get(this.url)
    .subscribe(data => {
      console.log(data);
      this.count++;
    });

  }
}
