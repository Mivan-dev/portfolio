# Trackio

Aplicación web para gestionar gastos mensuales personales: tarjetas de crédito, cuotas, servicios y sus próximas fechas de vencimiento.

> **Demo en producción:** [trackio-app.netlify.app](https://trackio-app.netlify.app)
>
> Para acceder a la demo, contactame para obtener credenciales de prueba.

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Frontend | Angular 20 (Signals), Tailwind CSS v4 |
| Backend | NestJS 11 |
| Base de datos | PostgreSQL vía Prisma 7 |
| Autenticación | JWT + Passport |
| Deploy frontend | Netlify |
| Deploy backend | Render |
| DB en producción | Supabase |

---

## Estructura del proyecto

```
trackio/
├── expenses-manager/              # Aplicación Angular (frontend)
│   ├── src/app/components/        # Componentes de layout y funcionalidades
│   ├── src/app/pages/             # Login y dashboard
│   ├── src/app/models/            # Interfaces del dominio
│   ├── src/app/services/          # Auth, estado global y clientes HTTP
│   ├── src/app/guards/            # Auth guard
│   ├── src/app/interceptors/      # HTTP interceptor para JWT
│   └── src/environments/          # Variables de entorno por ambiente
└── expenses-manager-api/          # API NestJS (backend)
    ├── prisma/schema.prisma        # Modelo de datos
    ├── prisma/migrations/          # Migraciones de PostgreSQL
    └── src/                        # Módulos, controladores y servicios
```

---

## Funcionalidades

- Autenticación con JWT (login, logout, rutas protegidas)
- Alta, edición y eliminación de tarjetas de crédito
- Gestión de cuotas asociadas a tarjetas con cálculo automático de cuota actual
- Alta, edición y eliminación de servicios (luz, internet, streaming, etc.)
- Almacenamiento de credenciales por servicio (número de cliente, contrato, etc.)
- Empresas con logo asociadas a tarjetas y servicios
- Cálculo de totales mensuales (tarjetas + servicios)
- Listado de próximos vencimientos ordenados por fecha
- Navegación lateral colapsable
- Aislamiento de datos por usuario (multi-tenancy con JWT)

---

## Correr el proyecto localmente

### Requisitos

- Node.js 18+
- PostgreSQL corriendo localmente
- Git

### 1. Clonar el repositorio

```bash
git clone https://github.com/Mivan-dev/expenses-manager.git
cd expenses-manager
```

### 2. Configurar el backend

Desde la carpeta `expenses-manager-api/`:

```bash
npm install
```

Crear el archivo `.env`:

```env
DATABASE_URL="postgresql://USUARIO:PASSWORD@localhost:5432/trackio"
JWT_SECRET="tu_secreto_jwt"
```

Aplicar las migraciones:

```bash
npx prisma migrate deploy
npx prisma generate
```

Iniciar el servidor:

```bash
npm run start:dev
```

La API queda disponible en `http://localhost:3000`.

### 3. Crear un usuario

Con el backend corriendo, ejecutar:

```bash
curl -X POST http://localhost:3000/usuario \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Ivan","email":"ivan@email.com","password":"password123"}'
```

### 4. Configurar el frontend

Desde la carpeta `expenses-manager/`:

```bash
npm install
```

Verificar que `src/environments/environment.development.ts` apunte al backend local:

```typescript
export const environment = {
  apiUrl: 'http://localhost:3000'
};
```

Iniciar el servidor de desarrollo:

```bash
npm start
```

Abrir `http://localhost:4200` e iniciar sesión con el usuario creado.

---

## Endpoints principales

| Método | Ruta | Descripción | Auth |
|---|---|---|---|
| `POST` | `/auth/login` | Iniciar sesión | No |
| `POST` | `/usuario` | Crear usuario | No |
| `GET/POST/PATCH/DELETE` | `/tarjeta` | Gestionar tarjetas | JWT |
| `GET/POST/PATCH/DELETE` | `/servicio` | Gestionar servicios | JWT |
| `POST/PATCH/DELETE` | `/cuota` | Gestionar cuotas | JWT |
| `GET/POST/PATCH/DELETE` | `/empresa` | Gestionar empresas | JWT |

---

## Comandos útiles

### Frontend

```bash
npm start          # Servidor de desarrollo
npm run build      # Build de producción
npm test           # Tests unitarios
```

### Backend

```bash
npm run start:dev  # Servidor con hot reload
npm run build      # Compilación
npm test           # Tests unitarios
```

### Prisma

```bash
npx prisma migrate dev --name nombre   # Nueva migración
npx prisma migrate deploy              # Aplicar migraciones
npx prisma studio                      # Explorador visual de la BD
npx prisma generate                    # Regenerar cliente
```

---

## Notas de arquitectura

- `usuarioId` se extrae del JWT en el backend — nunca se confía en el body del request.
- Los endpoints de `update` y `delete` verifican ownership y lanzan `ForbiddenException` si no coincide.
- Servicios HTTP separados por recurso (`TarjetaApi`, `ServicioApi`, etc.) para mantener las responsabilidades aisladas.
- Estado global manejado con Angular Signals en `GastosService`.
- `EmpresaDropdown` es un componente standalone con imagen para reemplazar el `<select>` nativo.
- Se agregaran mejoras en los puntos debiles tanto del back como del front en las proximas versiones.

---

Desarrollado por **Iván Mendoza**