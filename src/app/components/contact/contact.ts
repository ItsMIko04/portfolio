import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [], 
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  customMessage: string = '';


  onMessageChange(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    this.customMessage = textarea.value;
  }


  generateMailtoLink(): string {
    const emailDestinatario = 'pesqq.mico@gmail.com';
    const oggetto = encodeURIComponent('Contatto dal Portfolio Web');
    const corpoMail = encodeURIComponent(this.customMessage);

    return `mailto:${emailDestinatario}?subject=${oggetto}&body=${corpoMail}`;
  }
}