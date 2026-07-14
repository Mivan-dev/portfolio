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
    title: 'Expenses Manager',
    description: 'Aplicación personal para llevar gastos de tarjetas de crédito y servicios con guardado en LocalStorage. Proximamente con db propia en PostgreSQL y NestJS.',
    images: ['images/expenses-1.png', 'images/expenses-2.png', 'images/expenses-3.png'],
    technologies: ['Angular', 'Tailwind', 'NestJS', 'SQL'],
    url: 'https://github.com/Mivan-dev/expenses-manager'
  },
  {
    title: 'Todo App',
    description: 'Aplicación para la creación y seguimiento de tareas personales.',
    images: ['images/todo-1.png', 'images/todo-2.png', 'images/todo-3.png'],
    technologies: ['Angular', 'Bootstrap', 'TypeScript'],
    url: 'https://github.com/Mivan-dev/todo-app'
  },
  {
    title: 'Otro Proyecto',
    description: 'Bla bla bla blablubla blalalalalablala liblabliblo blubliblato',
    images: ['images/exp-1.jpg', 'images/exp-2.jpg', 'images/exp-3.jpg'],
    technologies: ['Laravel', 'php'],
    url: 'https://github.com/Mivan-dev/todo-app'
  }
];

}
