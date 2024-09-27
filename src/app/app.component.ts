import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  //    h3 {
  //      color: dodgerblue;
  //    },
  //    p {
  //     color: green;
  //    }
  //  `]
})
export class AppComponent {
  title = 'wdd430-h3';
  userName = '';

  // onUpdateUserName(event: Event) {
  //   this.userName = (<HTMLInputElement>event.target).value; //letting typescript know that the target will be an html element.
  // }
}

