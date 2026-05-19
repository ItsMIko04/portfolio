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
  
  formData = {
    name: '',
    email: '',
    message: ''
  };

  sendForm(event: Event) {
    event.preventDefault(); 

    
    const emailHash = 'IL_TUO_HASH_NASCOSTO'; 
    const formSubmitEndpoint = `https://formsubmit.co/ajax/${emailHash}`;

    const payload = {
      Nome: this.formData.name,
      Email_Mittente: this.formData.email,
      Messaggio: this.formData.message,
      _subject: 'Nuovo messaggio dal Portfolio!'
    };

    fetch(formSubmitEndpoint, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (response.ok) {
        alert('Messaggio inviato con successo!');
        this.formData = { name: '', email: '', message: '' };
      } else {
        alert('Si è verificato un errore durante l\'invio. Riprova più tardi.');
      }
    })
    .catch(error => {
      console.error('Errore di rete:', error);
      alert('Impossibile stabilire una connessione con il server di invio.');
    });
  }
}