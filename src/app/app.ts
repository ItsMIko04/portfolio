import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar'; 
import { Footer } from './components/footer/footer'; 
import { Skills } from './components/skills/skills';
import { Hero } from './components/hero/hero';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, Skills, Hero], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
