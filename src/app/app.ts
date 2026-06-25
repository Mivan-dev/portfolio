import { Component, signal } from '@angular/core';
import { Nav } from './layout/nav/nav';
import { Footer } from './layout/footer/footer';
import { Proyects } from './features/proyects/proyects';
import { Skills } from './features/skills/skills';
import { About } from './features/about/about';
import { Hero } from './features/hero/hero';


@Component({
  selector: 'app-root',
  imports: [Nav, Footer, Hero, About, Skills, Proyects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
