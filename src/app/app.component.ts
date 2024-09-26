import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
     h3 {
       color: dodgerblue;
     },
     p {
      color: green;
     }
   `]
})
export class AppComponent {
  title = 'wdd430-h3';
}
