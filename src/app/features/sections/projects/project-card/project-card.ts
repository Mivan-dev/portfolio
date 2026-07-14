import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  currentImage = signal(0);
  isModalOpen = signal(false);
  images = input<string[]>([]);
  title = input<string>('');
  description = input<string>('');
  technologies = input<string[]>([]);
  url = input<string>('');

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  nextImage() {
    this.currentImage.update((i) => (i + 1) % this.images().length);
  }

  prevImage() {
    this.currentImage.update((i) => (i - 1 + this.images().length) % this.images().length);
  }

  goToImage(index: number) {
    this.currentImage.set(index);
  }
}
