import { Component } from '@angular/core';
import { ProjectCard } from './project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  projects = [
  {
    title: 'Kiosco App',
    description: '...',
    images: ['assets/images/kiosco-1.png', 'assets/images/kiosco-2.png', 'assets/images/kiosco-3.png'],
    technologies: ['Angular', 'NestJS', 'PostgreSQL']
  },
  {
    title: 'Expenses Manager',
    description: '...',
    images: ['assets/images/expenses-1.png', 'assets/images/expenses-2.png', 'assets/images/expenses-3.png'],
    technologies: ['Angular', 'Tailwind']
  }
];

}
