import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  
  customMessage: string = '';

 
  
  generateMailtoLink(): string {
    const emailDestinatario = 'pesqq.mico@gmail.com';
    const oggetto = encodeURIComponent('Contatto dal Portfolio Web');
    const corpoMail = encodeURIComponent(this.customMessage);

    return `mailto:${emailDestinatario}?subject=${oggetto}&body=${corpoMail}`;
  }
}