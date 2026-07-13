import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update((open) => !open);
  }
}
