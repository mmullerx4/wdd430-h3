import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'wdd430-h3';
  userName = '';
  showSecret = false;
  details = ['detail1', 'detail2'];
  log = [];

  // onUpdateUserName(event: Event) {
  //   this.userName = (<HTMLInputElement>event.target).value; //letting typescript know that the target will be an html element.
  // }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

}

