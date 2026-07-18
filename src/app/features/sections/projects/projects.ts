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
      title: 'Student Management System',
      description:
        'Sistema de gestión de estudiantes, que permite administrar estudiantes, cursos e inscripciones* con diferentes niveles de acceso según el rol del usuario. Info detallada en el README.md',
      images: [
        'images/student-system-2.png',
        'images/student-system-1.png',
        'images/student-system-3.png',
        'images/student-system-4.png',
      ],
      technologies: ['Angular', 'Bootstrap', 'Angular Material', 'MockApi'],
      url: 'https://github.com/Mivan-dev/entrega1-ivan-mendoza',
    },
    {
      title: 'Expenses Manager',
      description:
        'Aplicación para llevar gastos de tarjetas de crédito y servicios con guardado en LocalStorage. En desarrollo DB con NestJS y PostgreSQL.',
      images: ['images/expenses-1.png', 'images/expenses-2.png', 'images/expenses-3.png'],
      technologies: ['Angular', 'Tailwind', 'NestJS', 'SQL'],
      url: 'https://github.com/Mivan-dev/expenses-manager',
    },
    {
      title: 'Todo App',
      description: 'Aplicación para la creación y seguimiento de tareas personales con guardado en LocalStorage.',
      images: ['images/todo-1.png', 'images/todo-2.png', 'images/todo-3.png'],
      technologies: ['Angular', 'Bootstrap', 'TypeScript'],
      url: 'https://app-todo-mivan.netlify.app/',
    },
  ];
}
