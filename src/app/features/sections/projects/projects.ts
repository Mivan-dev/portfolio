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
      title: 'IT Roadmap AI',
      description:
        'Genera roadmaps de skills personalizados para perfiles Junior, orientados al mercado laboral hacia 2030. El usuario configura su perfil y la IA consulta tendencias reales para devolver un plan concreto y accionable — no una guía genérica, sino lo que las empresas están pidiendo hoy y van a pedir en los próximos años.',
      images: ['images/it-roadmap-1.png', 'images/it-roadmap-2.png', 'images/it-roadmap-3.png', 'images/it-roadmap-4.png'],
      technologies: ['Angular', 'Tailwind', 'NestJS', 'OpenRouter', 'DeepSeek'],
      url: 'https://it-roadmap-ai.netlify.app/',
    },
    {
      title: 'Trackio',
      description:
        'App fullstack de gestión de gastos: tarjetas, cuotas, servicios y vencimientos mensuales. Usuario de prueba: "usuario1@usuario1.com" password: "UserTest1." - mas info en el Readme.',
      images: ['images/expenses-1.png', 'images/expenses-2.png', 'images/expenses-3.png'],
      technologies: ['Angular', 'Tailwind', 'NestJS', 'Prisma', 'SQL'],
      url: 'https://trackio-app.netlify.app/',
    },
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
      title: 'Todo App',
      description: 'Aplicación para la creación y seguimiento de tareas personales con guardado en LocalStorage.',
      images: ['images/todo-1.png', 'images/todo-2.png', 'images/todo-3.png'],
      technologies: ['Angular', 'Bootstrap', 'TypeScript'],
      url: 'https://app-todo-mivan.netlify.app/',
    },
  ];
}
