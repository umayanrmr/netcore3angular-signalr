import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  private _hubConnection: HubConnection;
  showimage = false;
  signaldata: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this._hubConnection = new HubConnectionBuilder().withUrl('/notify').build();
    this._hubConnection.start()
    .then(() => {
      console.log('connection started')
    }).catch(err => {
      console.log("Error while establishing connection")
    })


    this._hubConnection.on('BroadcastMessage', (message) => {
      this.signaldata.push(message);
      this.showimage = true;
    })


    
  }
  showMessage() {
    this.showimage = false;
  }
}
