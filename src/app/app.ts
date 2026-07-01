import { Component, signal } from '@angular/core';
import { Nav } from './layout/nav/nav';
import { Footer } from './layout/footer/footer';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Nav, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
