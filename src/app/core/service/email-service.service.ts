import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailDTO } from '../models/email-dto';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  url = "https://devkuroi.up.railway.app/send-email";

  constructor(private http: HttpClient) {}

  submitForm(emailDTO: EmailDTO) {
    this.http.post<EmailDTO>(this.url, emailDTO);
  } 
  
}
