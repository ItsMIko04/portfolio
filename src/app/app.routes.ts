import { Routes } from '@angular/router';
import { Experience } from './components/experience/experience';
import { Contact } from './components/contact/contact';
import { Informazioni } from './components/informazioni/informazioni';

export const routes: Routes = [
    { path: '', children: [] },
    { path: 'informazioni', component: Informazioni },
    { path: 'esperienza', component: Experience },
    { path: 'contattami', component: Contact },
];