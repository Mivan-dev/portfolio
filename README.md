# Portfolio personal | Iván Mendoza

Portfolio web personal de Iván Mendoza, desarrollador frontend especializado en Angular,
TypeScript y Tailwind CSS. El sitio reúne su perfil profesional, formación, habilidades, proyectos
y un formulario de contacto.

## Vista general

- Presentación profesional y descarga del [CV](public/cv/ivan-mendoza-cv.pdf).
- Secciones de navegación: Inicio, Sobre mí, Skills, Proyectos y Contacto.
- Diseño responsive para dispositivos móviles y escritorio.
- Formulario de contacto reactivo con validaciones y envío mediante Formspree.
- Tarjetas de proyectos con tecnologías utilizadas y enlaces a sus demos o repositorios.

## Proyectos destacados

| Proyecto | Descripción | Tecnologías |
| --- | --- | --- |
| [Student Management System](https://github.com/Mivan-dev/entrega1-ivan-mendoza) | Gestión de estudiantes, cursos e inscripciones con distintos roles de acceso. | Angular, Bootstrap, Angular Material, MockApi |
| [Expenses Manager](https://github.com/Mivan-dev/expenses-manager) | Control de gastos de tarjetas y servicios con persistencia en LocalStorage. | Angular, Tailwind, NestJS, SQL |
| [Todo App](https://app-todo-mivan.netlify.app/) | Creación y seguimiento de tareas personales con persistencia en LocalStorage. | Angular, Bootstrap, TypeScript |

## Stack tecnológico

### Frontend

Angular 20, TypeScript, JavaScript, HTML, CSS y Tailwind CSS.

### Backend y datos

Node.js, NestJS, PostgreSQL, MongoDB y consumo de APIs HTTP.

### Herramientas y testing

Git, Postman, Angular CLI, Jasmine y Karma.

## Estructura del proyecto

```text
src/
├── app/
│   ├── features/
│   │   ├── home/
│   │   └── sections/
│   │       ├── about/
│   │       ├── contact/
│   │       ├── hero/
│   │       ├── projects/
│   │       └── skills/
│   └── layout/
│       ├── footer/
│       └── nav/
├── assets/
└── styles.css
public/
├── cv/
└── images/
```

La aplicación utiliza componentes standalone de Angular y organiza la página por funcionalidades,
secciones y elementos de layout reutilizables.

## Requisitos

- Node.js 20 o superior.
- npm 10 o superior.

## Instalación y desarrollo

1. Clona el repositorio y entra en la carpeta del proyecto.
2. Instala las dependencias:

	```bash
	npm install
	```

3. Inicia el servidor de desarrollo:

	```bash
	npm start
	```

4. Abre [http://localhost:4200](http://localhost:4200) en el navegador.

La aplicación se recarga automáticamente al modificar los archivos fuente.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm start` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la compilación optimizada en `dist/`. |
| `npm test` | Ejecuta las pruebas unitarias con Karma y Jasmine. |
| `npm run watch` | Compila en modo desarrollo y observa cambios. |

## Formación

- Licenciatura en Ciencias de la Computación, UNC-FAMAF (2015-2019).
- Desarrollo Web HTML, CSS y JavaScript, Udemy (2020-2021).
- Desarrollo Web Fullstack (MERN), Argentina Programa 4.0 (2022-2023).
- Desarrollo Frontend Angular, Coderhouse (2025).

## Contacto

- Email: [mivan.dev@gmail.com](mailto:mivan.dev@gmail.com)
- GitHub: [Mivan-dev](https://github.com/Mivan-dev)

## Licencia

Este proyecto es un portfolio personal. El código y los recursos visuales pertenecen a su autor y
no deben reutilizarse sin autorización.
