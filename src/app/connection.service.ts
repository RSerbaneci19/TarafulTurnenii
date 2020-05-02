import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  url: string = 'https://127.0.0.1:8080/send';

  constructor(private http: HttpClient) {
  }

  sendMessage(messageContent: any) {
    return this.http.post(this.url,
      JSON.stringify(messageContent),
      {headers: new HttpHeaders({'Content-Type': 'application/json'}), responseType: 'text'});
  }
}
