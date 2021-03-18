import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.css']
})
export class SendmessageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  senddata() {
    const x = {
      Type: 'warning',
      Information: 'text information message'
    }

    this.http.get('/api/Message').subscribe()
  }

}
