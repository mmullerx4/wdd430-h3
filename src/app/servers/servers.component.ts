import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  allowNewUser = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  

  constructor() {  //method that executed at time created by Angular
    setTimeout(() => {  //arguments with function body
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {

  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }



}
